"""
Stories handlers for memorial website.

Routes:
  POST /stories - Submit new story
  GET /stories - Get approved stories
  GET /stories/{id} - Get single story details
  PUT /admin/stories/{id} - Moderate story (approve/reject)
  GET /admin/stories - Get pending stories
"""

import json
import uuid
from typing import Dict, Any
from utils.powertools_config import logger, tracer, metrics, add_metric
from utils.dynamodb import create_item, get_item, update_item, query_by_status
from aws_lambda_powertools.metrics import MetricUnit

ENTITY_TYPE = "STORY"


def validate_story(data: Dict) -> tuple[bool, str]:
    """
    Validate story data.

    Returns:
        (is_valid, error_message)
    """
    required_fields = ['title', 'content', 'authorName', 'relationship']

    for field in required_fields:
        if field not in data or not data[field].strip():
            return False, f"Missing required field: {field}"

    # Validate field lengths
    if len(data['title']) > 200:
        return False, "Title must be 200 characters or less"

    if len(data['content']) > 10000:
        return False, "Content must be 10,000 characters or less"

    if len(data['authorName']) > 100:
        return False, "Author name must be 100 characters or less"

    if len(data['relationship']) > 200:
        return False, "Relationship must be 200 characters or less"

    if 'email' in data and len(data['email']) > 255:
        return False, "Email must be 255 characters or less"

    # Minimum content length
    if len(data['content'].strip()) < 50:
        return False, "Content must be at least 50 characters"

    return True, ""


@tracer.capture_method
def submit_story(event: Dict) -> Dict[str, Any]:
    """
    Submit a new story.

    POST /stories
    Body: {
        "title": "string (required)",
        "content": "string (required)",
        "authorName": "string (required)",
        "relationship": "string (required)",
        "email": "string (optional)",
        "tags": ["string"] (optional)
    }
    """
    try:
        body = json.loads(event.get('body', '{}'))

        # Validate input
        is_valid, error_msg = validate_story(body)
        if not is_valid:
            add_metric("StoryValidationError", 1)
            return {
                'statusCode': 400,
                'body': json.dumps({'error': error_msg})
            }

        # Generate ID
        story_id = str(uuid.uuid4())

        # Prepare story data
        story_data = {
            'title': body.get('title', '').strip(),
            'content': body.get('content', '').strip(),
            'authorName': body.get('authorName', '').strip(),
            'relationship': body.get('relationship', '').strip(),
            'email': body.get('email', '').strip() or None,
            'tags': body.get('tags', []),
            'moderationStatus': 'pending',
        }

        # Create story
        story = create_item(ENTITY_TYPE, story_id, story_data)

        # Remove internal fields from response
        response_story = {
            'id': story['id'],
            'title': story['title'],
            'authorName': story['authorName'],
            'relationship': story['relationship'],
            'submittedAt': story['submittedAt'],
            'status': 'pending'
        }

        add_metric("StorySubmitted", 1)
        logger.info("Story submitted", extra={"story_id": story_id})

        return {
            'statusCode': 201,
            'body': json.dumps({
                'message': 'Story submitted successfully. It will appear after moderation.',
                'story': response_story
            })
        }

    except json.JSONDecodeError:
        add_metric("StoryJSONError", 1)
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        logger.error(f"Error submitting story: {str(e)}")
        add_metric("StoryError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def get_approved_stories(event: Dict) -> Dict[str, Any]:
    """
    Get approved stories.

    GET /stories?limit=50&lastKey=...
    """
    try:
        params = event.get('queryStringParameters') or {}
        limit = int(params.get('limit', 50))
        limit = min(limit, 100)  # Cap at 100

        last_key = params.get('lastKey')
        last_evaluated_key = json.loads(last_key) if last_key else None

        # Query approved stories
        result = query_by_status(ENTITY_TYPE, 'approved', limit, last_evaluated_key)

        # Format stories for public display
        public_stories = []
        for story in result['items']:
            public_story = {
                'id': story['id'],
                'title': story['title'],
                'content': story['content'],
                'authorName': story['authorName'],
                'relationship': story['relationship'],
                'tags': story.get('tags', []),
                'submittedAt': story['submittedAt']
            }
            public_stories.append(public_story)

        response = {
            'stories': public_stories,
            'count': result['count']
        }

        if result.get('lastEvaluatedKey'):
            response['lastKey'] = json.dumps(result['lastEvaluatedKey'])

        add_metric("StoriesFetched", result['count'], MetricUnit.Count)
        logger.info(f"Fetched {result['count']} approved stories")

        return {
            'statusCode': 200,
            'body': json.dumps(response)
        }

    except Exception as e:
        logger.error(f"Error fetching stories: {str(e)}")
        add_metric("StoryFetchError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def get_story_by_id(event: Dict) -> Dict[str, Any]:
    """
    Get a single story by ID.

    GET /stories/{id}
    """
    try:
        story_id = event.get('pathParameters', {}).get('id')
        if not story_id:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Story ID is required'})
            }

        story = get_item(ENTITY_TYPE, story_id)

        if not story:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Story not found'})
            }

        # Only return approved stories to public
        if story.get('moderationStatus') != 'approved':
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Story not found'})
            }

        # Format for public display
        public_story = {
            'id': story['id'],
            'title': story['title'],
            'content': story['content'],
            'authorName': story['authorName'],
            'relationship': story['relationship'],
            'tags': story.get('tags', []),
            'submittedAt': story['submittedAt']
        }

        add_metric("StoryViewed", 1)
        logger.info("Story viewed", extra={"story_id": story_id})

        return {
            'statusCode': 200,
            'body': json.dumps({'story': public_story})
        }

    except Exception as e:
        logger.error(f"Error fetching story: {str(e)}")
        add_metric("StoryFetchError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def moderate_story(event: Dict) -> Dict[str, Any]:
    """
    Moderate a story (approve/reject).

    PUT /admin/stories/{id}
    Body: {
        "action": "approve" | "reject",
        "moderatorNotes": "string (optional)"
    }

    Requires API Key in x-api-key header
    """
    try:
        # Extract story ID from path
        story_id = event.get('pathParameters', {}).get('id')
        if not story_id:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Story ID is required'})
            }

        # Parse body
        body = json.loads(event.get('body', '{}'))
        action = body.get('action')

        if action not in ['approve', 'reject']:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Action must be "approve" or "reject"'})
            }

        # Get story
        story = get_item(ENTITY_TYPE, story_id)
        if not story:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Story not found'})
            }

        # Update moderation status
        updates = {
            'moderationStatus': 'approved' if action == 'approve' else 'rejected',
            'moderatorNotes': body.get('moderatorNotes')
        }

        updated_story = update_item(ENTITY_TYPE, story_id, updates)

        add_metric(f"Story{action.capitalize()}d", 1)
        logger.info(f"Story {action}d", extra={"story_id": story_id})

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': f'Story {action}d successfully',
                'story': {
                    'id': updated_story['id'],
                    'status': updated_story['moderationStatus'],
                    'moderatedAt': updated_story.get('moderatedAt')
                }
            })
        }

    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        logger.error(f"Error moderating story: {str(e)}")
        add_metric("StoryModerationError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }


@tracer.capture_method
def get_pending_stories(event: Dict) -> Dict[str, Any]:
    """
    Get pending stories for moderation.

    GET /admin/stories?limit=50&lastKey=...

    Requires API Key in x-api-key header
    """
    try:
        params = event.get('queryStringParameters') or {}
        limit = int(params.get('limit', 50))
        limit = min(limit, 100)

        last_key = params.get('lastKey')
        last_evaluated_key = json.loads(last_key) if last_key else None

        # Query pending stories
        result = query_by_status(ENTITY_TYPE, 'pending', limit, last_evaluated_key)

        # Format stories for admin view (include all fields)
        admin_stories = []
        for story in result['items']:
            admin_story = {
                'id': story['id'],
                'title': story['title'],
                'content': story['content'],
                'authorName': story['authorName'],
                'relationship': story['relationship'],
                'email': story.get('email'),
                'tags': story.get('tags', []),
                'submittedAt': story['submittedAt'],
                'status': story['moderationStatus']
            }
            admin_stories.append(admin_story)

        response = {
            'stories': admin_stories,
            'count': result['count']
        }

        if result.get('lastEvaluatedKey'):
            response['lastKey'] = json.dumps(result['lastEvaluatedKey'])

        add_metric("PendingStoriesFetched", result['count'], MetricUnit.Count)
        logger.info(f"Fetched {result['count']} pending stories")

        return {
            'statusCode': 200,
            'body': json.dumps(response)
        }

    except Exception as e:
        logger.error(f"Error fetching pending stories: {str(e)}")
        add_metric("StoryAdminFetchError", 1)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }
