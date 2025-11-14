"""
Main Lambda handler for Neuroboy Memorial API.

Routes requests to appropriate handlers based on path and method.
Uses AWS Powertools for logging, tracing, and metrics.
"""

import json
from typing import Dict, Any
from utils.powertools_config import logger, tracer, metrics
from aws_lambda_powertools.utilities.typing import LambdaContext
import guestbook
import stories


def cors_headers() -> Dict[str, str]:
    """Standard CORS headers for all responses."""
    return {
        'Access-Control-Allow-Origin': '*',  # TODO: Restrict to your domain in production
        'Access-Control-Allow-Headers': 'Content-Type,X-Api-Key',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Content-Type': 'application/json'
    }


def validate_api_key(event: Dict) -> bool:
    """
    Validate API key for admin endpoints.

    In production, API Gateway handles this via usage plan.
    This is a secondary check.
    """
    # API Gateway validates the key, so if request reaches here, it's valid
    # This function is a placeholder for additional validation logic if needed
    headers = event.get('headers', {})
    return 'x-api-key' in headers or 'X-Api-Key' in headers


def route_request(event: Dict, context: LambdaContext) -> Dict[str, Any]:
    """
    Route incoming request to appropriate handler.

    Returns:
        Lambda response dict with statusCode, headers, body
    """
    path = event.get('path', '')
    method = event.get('httpMethod', '')
    path_params = event.get('pathParameters') or {}

    logger.info(f"Request: {method} {path}", extra={
        'method': method,
        'path': path,
        'path_params': path_params
    })

    # Handle OPTIONS for CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers(),
            'body': ''
        }

    # ====================
    # PUBLIC ROUTES
    # ====================

    # Guestbook routes
    if path == '/guestbook' and method == 'POST':
        return guestbook.submit_guestbook_entry(event)

    if path == '/guestbook' and method == 'GET':
        return guestbook.get_approved_guestbook_entries(event)

    # Stories routes
    if path == '/stories' and method == 'POST':
        return stories.submit_story(event)

    if path == '/stories' and method == 'GET':
        return stories.get_approved_stories(event)

    if path.startswith('/stories/') and method == 'GET':
        return stories.get_story_by_id(event)

    # ====================
    # ADMIN ROUTES (require API key)
    # ====================

    if path.startswith('/admin/'):
        # Validate API key
        if not validate_api_key(event):
            return {
                'statusCode': 403,
                'headers': cors_headers(),
                'body': json.dumps({'error': 'Invalid or missing API key'})
            }

        # Guestbook admin routes
        if path == '/admin/guestbook' and method == 'GET':
            return guestbook.get_pending_guestbook_entries(event)

        if path.startswith('/admin/guestbook/') and method == 'PUT':
            return guestbook.moderate_guestbook_entry(event)

        # Stories admin routes
        if path == '/admin/stories' and method == 'GET':
            return stories.get_pending_stories(event)

        if path.startswith('/admin/stories/') and method == 'PUT':
            return stories.moderate_story(event)

    # ====================
    # HEALTH CHECK
    # ====================

    if path == '/health' and method == 'GET':
        return {
            'statusCode': 200,
            'headers': cors_headers(),
            'body': json.dumps({
                'status': 'healthy',
                'service': 'neuroboy-memorial-api',
                'version': '1.0.0'
            })
        }

    # Route not found
    logger.warning(f"Route not found: {method} {path}")
    return {
        'statusCode': 404,
        'headers': cors_headers(),
        'body': json.dumps({'error': 'Route not found'})
    }


@logger.inject_lambda_context(log_event=True)
@tracer.capture_lambda_handler
@metrics.log_metrics(capture_cold_start_metric=True)
def lambda_handler(event: Dict, context: LambdaContext) -> Dict[str, Any]:
    """
    Main Lambda handler entry point.

    Decorated with AWS Powertools for:
    - Logging with context injection
    - X-Ray tracing
    - CloudWatch metrics with cold start tracking
    """
    try:
        response = route_request(event, context)

        # Ensure CORS headers are present
        if 'headers' not in response:
            response['headers'] = {}
        response['headers'].update(cors_headers())

        return response

    except Exception as e:
        logger.exception(f"Unhandled exception: {str(e)}")
        metrics.add_metric(name="UnhandledError", unit="Count", value=1)

        return {
            'statusCode': 500,
            'headers': cors_headers(),
            'body': json.dumps({
                'error': 'Internal server error',
                'requestId': context.request_id
            })
        }
