"""
Guestbook handlers for memorial website.

Routes:
  POST /guestbook - Submit new guestbook entry
  GET /guestbook - Get approved guestbook entries
  PUT /admin/guestbook/{id} - Moderate guestbook entry (approve/reject)
  GET /admin/guestbook - Get pending guestbook entries
"""

import json
import uuid
from typing import Dict, Any
from utils.powertools_config import logger, tracer, metrics, add_metric
from utils.dynamodb import create_item, get_item, update_item, query_by_status
from aws_lambda_powertools.metrics import MetricUnit

ENTITY_TYPE = "GUESTBOOK"


def validate_guestbook_entry(data: Dict) -> tuple[bool, str]:
    """
    Validate guestbook entry data.

    Returns:
        (is_valid, error_message)
    """
    required_fields = ['message']

    for field in required_fields:
        if field not in data or not data[field].strip():
            return False, f"Missing required field: {field}"

    # Validate message length
    if len(data['message']) > 2000:
        return False, "Message must be 2000 characters or less"

    # Validate optional fields
    if 'authorName' in data and len(data['authorName']) > 100:
        return False, "Author name must be 100 characters or less"

    if 'relationship' in data and len(data['relationship']) > 200:
        return False, "Relationship must be 200 characters or less"

    if 'email' in data and len(data['email']) > 255:
        return False, "Email must be 255 characters or less"

    return True, ""


@tracer.capture_method
def submit_guestbook_entry(event: Dict) -> Dict[str, Any]:
    """
    Submit a new guestbook entry.

    POST /guestbook
    Body: {
        "authorName": "string (optional)",
        "relationship": "string (optional)",
        "message": "string (required)",
        "email": "string (optional)",
        "isAnonymous": boolean (optional, default: false)
    }
    """
    try:
        body = json.loads(event.get('body', '{}'))

        # Validate input
        is_valid, error_msg = validate_guestbook_entry(body)
        if not is_valid:
            add_metric("GuestbookValidationError", 1)
            return {
                'statusCode': 400,
                'body': json.dumps({'error': error_msg})
            }

        # Generate ID
        entry_id = str(uuid.uuid4())

        # Prepare entry data
        entry_data = {
            'authorName': body.get('authorName', '').strip() or None,
            'relationship': body.get('relationship', '').strip() or None,
            'message': body.get('message', '').strip(),
            'email': body.get('email', '').strip() or None,
            'isAnonymous': body.get('isAnonymous', False),
            'moderationStatus': 'pending',
        }

        # Create entry
        entry = create_item(ENTITY_TYPE, entry_id, entry_data)

        # Remove internal fields from response
        response_entry = {
            'id': entry['id'],
            'message': entry['message'],
            'authorName': entry.get('authorName'),
            'relationship': entry.get('relationship'),
            'submittedAt': entry['submittedAt'],
            'status': 'pending'
        }

        add_metric("GuestbookSubmitted", 1)
        logger.info("Guestbook entry submitted", extra={"entry_id": entry_id})

        return {
            'statusCode': 201,
            'body': json.dumps({
                'message': 'Guestbook entry submitted successfully. It will appear after moderation.',
                'entry': response_entry
            })
        }

    except json.JSONDecodeError:
        add_metric("GuestbookJSONError", 1)
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        logger.error(f"Error submitting guestbook entry: {str(e)}")
        add_metric("GuestbookError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def get_approved_guestbook_entries(event: Dict) -> Dict[str, Any]:
    """
    Get approved guestbook entries.

    GET /guestbook?limit=50&lastKey=...
    """
    try:
        params = event.get('queryStringParameters') or {}
        limit = int(params.get('limit', 50))
        limit = min(limit, 100)  # Cap at 100

        last_key = params.get('lastKey')
        last_evaluated_key = json.loads(last_key) if last_key else None

        # Query approved entries
        result = query_by_status(ENTITY_TYPE, 'approved', limit, last_evaluated_key)

        # Format entries for public display
        public_entries = []
        for entry in result['items']:
            public_entry = {
                'id': entry['id'],
                'message': entry['message'],
                'submittedAt': entry['submittedAt']
            }

            # Include author info if not anonymous
            if not entry.get('isAnonymous', False):
                if entry.get('authorName'):
                    public_entry['authorName'] = entry['authorName']
                if entry.get('relationship'):
                    public_entry['relationship'] = entry['relationship']

            public_entries.append(public_entry)

        response = {
            'entries': public_entries,
            'count': result['count']
        }

        if result.get('lastEvaluatedKey'):
            response['lastKey'] = json.dumps(result['lastEvaluatedKey'])

        add_metric("GuestbookEntriesFetched", result['count'], MetricUnit.Count)
        logger.info(f"Fetched {result['count']} approved guestbook entries")

        return {
            'statusCode': 200,
            'body': json.dumps(response)
        }

    except Exception as e:
        logger.error(f"Error fetching guestbook entries: {str(e)}")
        add_metric("GuestbookFetchError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def moderate_guestbook_entry(event: Dict) -> Dict[str, Any]:
    """
    Moderate a guestbook entry (approve/reject).

    PUT /admin/guestbook/{id}
    Body: {
        "action": "approve" | "reject",
        "moderatorNotes": "string (optional)"
    }

    Requires API Key in x-api-key header
    """
    try:
        # Extract entry ID from path
        entry_id = event.get('pathParameters', {}).get('id')
        if not entry_id:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Entry ID is required'})
            }

        # Parse body
        body = json.loads(event.get('body', '{}'))
        action = body.get('action')

        if action not in ['approve', 'reject']:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Action must be "approve" or "reject"'})
            }

        # Get entry
        entry = get_item(ENTITY_TYPE, entry_id)
        if not entry:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Entry not found'})
            }

        # Update moderation status
        updates = {
            'moderationStatus': 'approved' if action == 'approve' else 'rejected',
            'moderatorNotes': body.get('moderatorNotes')
        }

        updated_entry = update_item(ENTITY_TYPE, entry_id, updates)

        add_metric(f"Guestbook{action.capitalize()}d", 1)
        logger.info(f"Guestbook entry {action}d", extra={"entry_id": entry_id})

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': f'Entry {action}d successfully',
                'entry': {
                    'id': updated_entry['id'],
                    'status': updated_entry['moderationStatus'],
                    'moderatedAt': updated_entry.get('moderatedAt')
                }
            })
        }

    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        logger.error(f"Error moderating guestbook entry: {str(e)}")
        add_metric("GuestbookModerationError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def get_pending_guestbook_entries(event: Dict) -> Dict[str, Any]:
    """
    Get pending guestbook entries for moderation.

    GET /admin/guestbook?limit=50&lastKey=...

    Requires API Key in x-api-key header
    """
    try:
        params = event.get('queryStringParameters') or {}
        limit = int(params.get('limit', 50))
        limit = min(limit, 100)

        last_key = params.get('lastKey')
        last_evaluated_key = json.loads(last_key) if last_key else None

        # Query pending entries
        result = query_by_status(ENTITY_TYPE, 'pending', limit, last_evaluated_key)

        # Format entries for admin view (include all fields)
        admin_entries = []
        for entry in result['items']:
            admin_entry = {
                'id': entry['id'],
                'message': entry['message'],
                'authorName': entry.get('authorName'),
                'relationship': entry.get('relationship'),
                'email': entry.get('email'),
                'isAnonymous': entry.get('isAnonymous', False),
                'submittedAt': entry['submittedAt'],
                'status': entry['moderationStatus']
            }
            admin_entries.append(admin_entry)

        response = {
            'entries': admin_entries,
            'count': result['count']
        }

        if result.get('lastEvaluatedKey'):
            response['lastKey'] = json.dumps(result['lastEvaluatedKey'])

        add_metric("PendingGuestbookEntriesFetched", result['count'], MetricUnit.Count)
        logger.info(f"Fetched {result['count']} pending guestbook entries")

        return {
            'statusCode': 200,
            'body': json.dumps(response)
        }

    except Exception as e:
        logger.error(f"Error fetching pending guestbook entries: {str(e)}")
        add_metric("GuestbookAdminFetchError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }
