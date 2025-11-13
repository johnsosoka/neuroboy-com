# Neuroboy Memorial API Documentation

Version: 1.0.0
Base URL: `https://{api-gateway-id}.execute-api.us-west-2.amazonaws.com/prod`

## Overview

REST API for the Neuroboy Memorial Website community features. Supports:
- Guestbook entries
- Personal stories submissions
- Admin moderation

## Authentication

### Public Endpoints
No authentication required for:
- Submitting guestbook entries
- Submitting stories
- Viewing approved content

### Admin Endpoints
Require API Key in header:
```
X-Api-Key: {your-api-key}
```

## Common Response Format

### Success Response
```json
{
  "message": "Success message",
  "data": { /* response data */ }
}
```

### Error Response
```json
{
  "error": "Error message description"
}
```

## Endpoints

### Health Check

#### GET /health
Check API health status.

**Response 200:**
```json
{
  "status": "healthy",
  "service": "neuroboy-memorial-api",
  "version": "1.0.0"
}
```

---

## Guestbook Endpoints

### Submit Guestbook Entry

#### POST /guestbook

Submit a new guestbook entry. Entry will be pending moderation.

**Request Body:**
```json
{
  "authorName": "John Doe",           // optional
  "relationship": "Former colleague", // optional
  "message": "Your tribute message",  // required (max 2000 chars)
  "email": "john@example.com",        // optional
  "isAnonymous": false                // optional (default: false)
}
```

**Response 201:**
```json
{
  "message": "Guestbook entry submitted successfully. It will appear after moderation.",
  "entry": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "message": "Your tribute message",
    "authorName": "John Doe",
    "relationship": "Former colleague",
    "submittedAt": 1701234567,
    "status": "pending"
  }
}
```

**Response 400:**
```json
{
  "error": "Missing required field: message"
}
```

---

### Get Approved Guestbook Entries

#### GET /guestbook

Retrieve approved guestbook entries.

**Query Parameters:**
- `limit` (optional): Number of entries to return (default: 50, max: 100)
- `lastKey` (optional): Pagination key from previous response

**Example:**
```
GET /guestbook?limit=20
```

**Response 200:**
```json
{
  "entries": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "message": "John was an inspiration...",
      "authorName": "Jane Smith",
      "relationship": "Friend",
      "submittedAt": 1701234567
    },
    // ... more entries
  ],
  "count": 20,
  "lastKey": "{pagination-key}"  // optional, for next page
}
```

**Note:** Anonymous entries exclude `authorName` and `relationship`.

---

### Get Pending Guestbook Entries (Admin)

#### GET /admin/guestbook

Retrieve pending guestbook entries for moderation.

**Headers:**
```
X-Api-Key: {admin-api-key}
```

**Query Parameters:**
- `limit` (optional): Number of entries to return (default: 50, max: 100)
- `lastKey` (optional): Pagination key from previous response

**Response 200:**
```json
{
  "entries": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "message": "Pending tribute message",
      "authorName": "John Doe",
      "relationship": "Former colleague",
      "email": "john@example.com",
      "isAnonymous": false,
      "submittedAt": 1701234567,
      "status": "pending"
    },
    // ... more entries
  ],
  "count": 10,
  "lastKey": "{pagination-key}"
}
```

**Response 403:**
```json
{
  "error": "Invalid or missing API key"
}
```

---

### Moderate Guestbook Entry (Admin)

#### PUT /admin/guestbook/{id}

Approve or reject a guestbook entry.

**Headers:**
```
X-Api-Key: {admin-api-key}
```

**Path Parameters:**
- `id`: Entry UUID

**Request Body:**
```json
{
  "action": "approve",              // "approve" or "reject"
  "moderatorNotes": "Optional note" // optional
}
```

**Response 200:**
```json
{
  "message": "Entry approved successfully",
  "entry": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "approved",
    "moderatedAt": 1701234999
  }
}
```

**Response 404:**
```json
{
  "error": "Entry not found"
}
```

---

## Stories Endpoints

### Submit Story

#### POST /stories

Submit a new personal story. Story will be pending moderation.

**Request Body:**
```json
{
  "title": "Working with John at Ugobe",  // required (max 200 chars)
  "content": "Full story content...",     // required (50-10000 chars)
  "authorName": "Jane Smith",             // required (max 100 chars)
  "relationship": "Colleague at Ugobe",   // required (max 200 chars)
  "email": "jane@example.com",            // optional
  "tags": ["ugobe", "pleo", "robotics"]   // optional
}
```

**Response 201:**
```json
{
  "message": "Story submitted successfully. It will appear after moderation.",
  "story": {
    "id": "660e8400-e29b-41d4-a716-446655440000",
    "title": "Working with John at Ugobe",
    "authorName": "Jane Smith",
    "relationship": "Colleague at Ugobe",
    "submittedAt": 1701234567,
    "status": "pending"
  }
}
```

**Response 400:**
```json
{
  "error": "Content must be at least 50 characters"
}
```

---

### Get Approved Stories

#### GET /stories

Retrieve approved stories.

**Query Parameters:**
- `limit` (optional): Number of stories to return (default: 50, max: 100)
- `lastKey` (optional): Pagination key from previous response

**Example:**
```
GET /stories?limit=20
```

**Response 200:**
```json
{
  "stories": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "title": "Working with John at Ugobe",
      "content": "Full story content here...",
      "authorName": "Jane Smith",
      "relationship": "Colleague at Ugobe",
      "tags": ["ugobe", "pleo"],
      "submittedAt": 1701234567
    },
    // ... more stories
  ],
  "count": 20,
  "lastKey": "{pagination-key}"
}
```

---

### Get Single Story

#### GET /stories/{id}

Retrieve a single approved story by ID.

**Path Parameters:**
- `id`: Story UUID

**Response 200:**
```json
{
  "story": {
    "id": "660e8400-e29b-41d4-a716-446655440000",
    "title": "Working with John at Ugobe",
    "content": "Full story content here...",
    "authorName": "Jane Smith",
    "relationship": "Colleague at Ugobe",
    "tags": ["ugobe", "pleo"],
    "submittedAt": 1701234567
  }
}
```

**Response 404:**
```json
{
  "error": "Story not found"
}
```

---

### Get Pending Stories (Admin)

#### GET /admin/stories

Retrieve pending stories for moderation.

**Headers:**
```
X-Api-Key: {admin-api-key}
```

**Query Parameters:**
- `limit` (optional): Number of stories to return (default: 50, max: 100)
- `lastKey` (optional): Pagination key from previous response

**Response 200:**
```json
{
  "stories": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "title": "Working with John at Ugobe",
      "content": "Full story content...",
      "authorName": "Jane Smith",
      "relationship": "Colleague at Ugobe",
      "email": "jane@example.com",
      "tags": ["ugobe"],
      "submittedAt": 1701234567,
      "status": "pending"
    },
    // ... more stories
  ],
  "count": 5,
  "lastKey": "{pagination-key}"
}
```

**Response 403:**
```json
{
  "error": "Invalid or missing API key"
}
```

---

### Moderate Story (Admin)

#### PUT /admin/stories/{id}

Approve or reject a story.

**Headers:**
```
X-Api-Key: {admin-api-key}
```

**Path Parameters:**
- `id`: Story UUID

**Request Body:**
```json
{
  "action": "approve",              // "approve" or "reject"
  "moderatorNotes": "Optional note" // optional
}
```

**Response 200:**
```json
{
  "message": "Story approved successfully",
  "story": {
    "id": "660e8400-e29b-41d4-a716-446655440000",
    "status": "approved",
    "moderatedAt": 1701234999
  }
}
```

**Response 404:**
```json
{
  "error": "Story not found"
}
```

---

## Rate Limiting

API Gateway enforces rate limiting:
- **Burst limit:** 50 concurrent requests
- **Rate limit:** 100 requests/second
- **Quota:** 10,000 requests/day

Exceeding limits returns:
```json
{
  "message": "Too Many Requests"
}
```
Status: 429

---

## Error Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request (validation error) |
| 403  | Forbidden (invalid API key) |
| 404  | Not Found |
| 429  | Too Many Requests (rate limit) |
| 500  | Internal Server Error |

---

## CORS

All endpoints support CORS with:
- **Allowed Origins:** `*` (configure for production)
- **Allowed Methods:** `GET, POST, PUT, DELETE, OPTIONS`
- **Allowed Headers:** `Content-Type, X-Api-Key`

---

## DynamoDB Schema

### Single Table Design

**Table Name:** `neuroboy-memorial-content-prod`

**Primary Key:**
- **PK** (String): `{ENTITY_TYPE}#{ID}`
  - Example: `GUESTBOOK#550e8400-e29b-41d4-a716-446655440000`
- **SK** (String): `METADATA`

**Global Secondary Index:** `ModerationStatusIndex`
- **GSI1PK** (String): `{ENTITY_TYPE}#{STATUS}`
  - Example: `GUESTBOOK#pending`
- **GSI1SK** (Number): `submittedAt` timestamp

**Attributes:**
- `entityType`: GUESTBOOK | STORY
- `id`: UUID
- `moderationStatus`: pending | approved | rejected
- `submittedAt`: Unix timestamp
- `createdAt`: Unix timestamp
- `updatedAt`: Unix timestamp
- `moderatedAt`: Unix timestamp (optional)
- `moderatorNotes`: String (optional)
- Entity-specific fields...

---

## Cost Optimization

This API is designed for cost efficiency:

1. **DynamoDB:** On-demand pricing, single-table design, minimal GSIs
2. **Lambda:** 512MB memory, efficient execution times
3. **API Gateway:** REST API with usage plans and rate limiting
4. **CloudWatch:** 7-day log retention

**Estimated Monthly Cost (low traffic):**
- DynamoDB: $1-5
- Lambda: $1-3
- API Gateway: $3-5
- CloudWatch: <$1
- **Total: $5-15/month**

---

## Next Steps

For future phases:
- Add Cognito for authenticated user accounts
- Implement S3 pre-signed URLs for photo uploads
- Add artifact submission endpoints
- Implement email notifications via SES
- Add search functionality
