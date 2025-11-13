"""
DynamoDB utility functions for single-table design.

Table Schema:
  PK: Partition key - Format: {ENTITY_TYPE}#{ID}
  SK: Sort key - Format: METADATA or STATUS#{timestamp}
  GSI1PK: GSI partition key - Format: {ENTITY_TYPE}#{STATUS}
  GSI1SK: GSI sort key - Format: submittedAt timestamp

Entity Types:
  - GUESTBOOK
  - STORY
"""

import os
import time
from decimal import Decimal
from typing import Dict, List, Optional, Any
from datetime import datetime
import boto3
from botocore.exceptions import ClientError
from aws_lambda_powertools import Logger

logger = Logger(child=True)
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])


def get_timestamp() -> int:
    """Get current Unix timestamp."""
    return int(time.time())


def python_to_dynamodb(obj: Any) -> Any:
    """Convert Python types to DynamoDB types (float -> Decimal)."""
    if isinstance(obj, dict):
        return {k: python_to_dynamodb(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [python_to_dynamodb(item) for item in obj]
    elif isinstance(obj, float):
        return Decimal(str(obj))
    return obj


def dynamodb_to_python(obj: Any) -> Any:
    """Convert DynamoDB types to Python types (Decimal -> float/int)."""
    if isinstance(obj, dict):
        return {k: dynamodb_to_python(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [dynamodb_to_python(item) for item in obj]
    elif isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    return obj


def create_item(entity_type: str, item_id: str, data: Dict) -> Dict:
    """
    Create a new item in DynamoDB.

    Args:
        entity_type: Type of entity (GUESTBOOK, STORY, etc.)
        item_id: Unique identifier (UUID)
        data: Item data

    Returns:
        Created item
    """
    timestamp = get_timestamp()

    item = {
        'PK': f"{entity_type}#{item_id}",
        'SK': 'METADATA',
        'GSI1PK': f"{entity_type}#{data.get('moderationStatus', 'pending')}",
        'GSI1SK': timestamp,
        'entityType': entity_type,
        'id': item_id,
        'submittedAt': timestamp,
        'createdAt': timestamp,
        'updatedAt': timestamp,
        **data
    }

    # Convert floats to Decimals for DynamoDB
    item = python_to_dynamodb(item)

    try:
        table.put_item(Item=item)
        logger.info(f"Created {entity_type} item", extra={"item_id": item_id})
        return dynamodb_to_python(item)
    except ClientError as e:
        logger.error(f"Error creating item: {e}")
        raise


def get_item(entity_type: str, item_id: str) -> Optional[Dict]:
    """
    Get a single item by ID.

    Args:
        entity_type: Type of entity
        item_id: Unique identifier

    Returns:
        Item or None if not found
    """
    try:
        response = table.get_item(
            Key={
                'PK': f"{entity_type}#{item_id}",
                'SK': 'METADATA'
            }
        )
        item = response.get('Item')
        return dynamodb_to_python(item) if item else None
    except ClientError as e:
        logger.error(f"Error getting item: {e}")
        raise


def update_item(entity_type: str, item_id: str, updates: Dict) -> Dict:
    """
    Update an existing item.

    Args:
        entity_type: Type of entity
        item_id: Unique identifier
        updates: Dictionary of fields to update

    Returns:
        Updated item
    """
    timestamp = get_timestamp()

    # Build update expression
    update_expressions = []
    expression_attribute_names = {}
    expression_attribute_values = {}

    updates['updatedAt'] = timestamp

    # Handle moderation status updates (need to update GSI1PK)
    if 'moderationStatus' in updates:
        updates['GSI1PK'] = f"{entity_type}#{updates['moderationStatus']}"
        if 'moderationStatus' in updates:
            updates['moderatedAt'] = timestamp

    for key, value in updates.items():
        attr_name = f"#{key}"
        attr_value = f":{key}"
        update_expressions.append(f"{attr_name} = {attr_value}")
        expression_attribute_names[attr_name] = key
        expression_attribute_values[attr_value] = value

    # Convert to DynamoDB types
    expression_attribute_values = python_to_dynamodb(expression_attribute_values)

    try:
        response = table.update_item(
            Key={
                'PK': f"{entity_type}#{item_id}",
                'SK': 'METADATA'
            },
            UpdateExpression=f"SET {', '.join(update_expressions)}",
            ExpressionAttributeNames=expression_attribute_names,
            ExpressionAttributeValues=expression_attribute_values,
            ReturnValues='ALL_NEW'
        )
        logger.info(f"Updated {entity_type} item", extra={"item_id": item_id})
        return dynamodb_to_python(response['Attributes'])
    except ClientError as e:
        logger.error(f"Error updating item: {e}")
        raise


def query_by_status(
    entity_type: str,
    status: str = 'approved',
    limit: int = 50,
    last_evaluated_key: Optional[Dict] = None
) -> Dict:
    """
    Query items by moderation status using GSI.

    Args:
        entity_type: Type of entity
        status: Moderation status (pending, approved, rejected)
        limit: Maximum items to return
        last_evaluated_key: For pagination

    Returns:
        Dict with 'items' and optional 'lastEvaluatedKey'
    """
    query_params = {
        'IndexName': 'ModerationStatusIndex',
        'KeyConditionExpression': 'GSI1PK = :gsi1pk',
        'ExpressionAttributeValues': {
            ':gsi1pk': f"{entity_type}#{status}"
        },
        'ScanIndexForward': False,  # Most recent first
        'Limit': limit
    }

    if last_evaluated_key:
        query_params['ExclusiveStartKey'] = last_evaluated_key

    try:
        response = table.query(**query_params)

        return {
            'items': [dynamodb_to_python(item) for item in response.get('Items', [])],
            'lastEvaluatedKey': response.get('LastEvaluatedKey'),
            'count': response.get('Count', 0)
        }
    except ClientError as e:
        logger.error(f"Error querying items: {e}")
        raise


def scan_all_items(
    entity_type: str,
    limit: int = 50,
    last_evaluated_key: Optional[Dict] = None
) -> Dict:
    """
    Scan all items of a given type (use sparingly, expensive).

    Args:
        entity_type: Type of entity
        limit: Maximum items to return
        last_evaluated_key: For pagination

    Returns:
        Dict with 'items' and optional 'lastEvaluatedKey'
    """
    scan_params = {
        'FilterExpression': 'entityType = :entity_type',
        'ExpressionAttributeValues': {
            ':entity_type': entity_type
        },
        'Limit': limit
    }

    if last_evaluated_key:
        scan_params['ExclusiveStartKey'] = last_evaluated_key

    try:
        response = table.scan(**scan_params)

        return {
            'items': [dynamodb_to_python(item) for item in response.get('Items', [])],
            'lastEvaluatedKey': response.get('LastEvaluatedKey'),
            'count': response.get('Count', 0)
        }
    except ClientError as e:
        logger.error(f"Error scanning items: {e}")
        raise


def delete_item(entity_type: str, item_id: str) -> bool:
    """
    Delete an item (soft delete by marking status).

    Args:
        entity_type: Type of entity
        item_id: Unique identifier

    Returns:
        True if deleted
    """
    try:
        table.delete_item(
            Key={
                'PK': f"{entity_type}#{item_id}",
                'SK': 'METADATA'
            }
        )
        logger.info(f"Deleted {entity_type} item", extra={"item_id": item_id})
        return True
    except ClientError as e:
        logger.error(f"Error deleting item: {e}")
        raise
