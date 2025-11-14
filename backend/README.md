# Neuroboy Memorial Backend

Cost-optimized serverless backend for the Neuroboy Memorial Website community features.

## Quick Start

```bash
# 1. Set AWS profile
export AWS_PROFILE=jscom

# 2. Deploy infrastructure
cd terraform/backend
terraform init
terraform apply

# 3. Get API URL
terraform output api_gateway_url

# 4. Test the API
curl "$(terraform output -raw api_gateway_url)/health"
```

## Architecture

- **API Gateway** - REST API endpoint
- **AWS Lambda** - Python 3.11 with AWS Powertools
- **DynamoDB** - Single-table design with on-demand pricing
- **CloudWatch** - Logging and monitoring (7-day retention)

## Features (Phase 1 & 2)

✅ **Guestbook**
- Submit tribute entries
- View approved entries
- Admin moderation

✅ **Stories**
- Submit personal stories
- View approved stories
- Admin moderation

## Cost Target

**$10-50/month** for low-moderate traffic

- DynamoDB: $1-5
- Lambda: $1-3
- API Gateway: $3-5
- CloudWatch: <$1

## Documentation

- **[API.md](./API.md)** - Complete API documentation with examples
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Step-by-step deployment guide

## Directory Structure

```
backend/
├── lambda/               # Lambda function code
│   ├── handler.py       # Main entry point
│   ├── guestbook.py     # Guestbook handlers
│   ├── stories.py       # Stories handlers
│   ├── requirements.txt # Python dependencies
│   └── utils/          # Shared utilities
│       ├── dynamodb.py
│       └── powertools_config.py
├── API.md              # API documentation
├── DEPLOYMENT.md       # Deployment guide
└── README.md           # This file

terraform/backend/       # Infrastructure as code
├── main.tf             # Resource definitions
├── variables.tf        # Input variables
└── outputs.tf          # Output values
```

## API Endpoints

### Public Endpoints
- `POST /guestbook` - Submit guestbook entry
- `GET /guestbook` - Get approved entries
- `POST /stories` - Submit story
- `GET /stories` - Get approved stories
- `GET /stories/{id}` - Get single story

### Admin Endpoints (require API key)
- `GET /admin/guestbook` - Get pending guestbook entries
- `PUT /admin/guestbook/{id}` - Moderate entry
- `GET /admin/stories` - Get pending stories
- `PUT /admin/stories/{id}` - Moderate story

## DynamoDB Schema

**Single-table design** for cost optimization:

```
PK: {ENTITY_TYPE}#{ID}
SK: METADATA
GSI1PK: {ENTITY_TYPE}#{STATUS}
GSI1SK: submittedAt (timestamp)
```

**Entity Types:**
- `GUESTBOOK` - Tribute entries
- `STORY` - Personal stories

**Moderation Status:**
- `pending` - Awaiting review
- `approved` - Published
- `rejected` - Not published

## Local Development

### Install Dependencies

```bash
cd lambda
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run Tests (Future)

```bash
pytest tests/
```

### Environment Variables

Lambda requires:
- `TABLE_NAME` - DynamoDB table name
- `ENVIRONMENT` - Environment name (prod/staging/dev)
- `LOG_LEVEL` - Logging level (INFO/DEBUG/WARNING/ERROR)
- `POWERTOOLS_SERVICE_NAME` - Service name for Powertools

These are set automatically by Terraform.

## Monitoring

### View Logs

```bash
aws logs tail "/aws/lambda/neuroboy-memorial-api-prod" --follow --profile jscom
```

### Check Metrics

```bash
# Lambda invocations
aws cloudwatch get-metric-statistics \
  --namespace AWS/Lambda \
  --metric-name Invocations \
  --dimensions Name=FunctionName,Value=neuroboy-memorial-api-prod \
  --start-time 2024-01-01T00:00:00Z \
  --end-time 2024-01-02T00:00:00Z \
  --period 3600 \
  --statistics Sum \
  --profile jscom
```

### Query DynamoDB

```bash
# Get all pending guestbook entries
aws dynamodb query \
  --table-name neuroboy-memorial-content-prod \
  --index-name ModerationStatusIndex \
  --key-condition-expression "GSI1PK = :pk" \
  --expression-attribute-values '{":pk":{"S":"GUESTBOOK#pending"}}' \
  --profile jscom
```

## Updating

### Update Lambda Code

```bash
# Edit Python files in lambda/
cd terraform/backend
terraform apply  # Automatically detects and deploys changes
```

### Update Infrastructure

```bash
# Edit Terraform files
cd terraform/backend
terraform plan   # Review changes
terraform apply  # Apply changes
```

## Security

- API keys for admin endpoints (via API Gateway Usage Plan)
- IAM roles with least privilege
- CORS configuration
- Rate limiting (50 burst, 100/sec, 10k/day)
- Input validation on all endpoints

## Future Phases

### Phase 3: Photo Uploads
- S3 bucket for image storage
- Pre-signed URL generation
- Image optimization Lambda
- CloudFront for CDN

### Phase 4: Artifacts
- Multi-file upload support
- Artifact categorization
- Enhanced search

### Phase 5: Advanced Features
- AWS Cognito for user accounts
- Email notifications (SES)
- Full-text search
- Admin dashboard UI

## Troubleshooting

### Lambda import errors
```bash
# Ensure all dependencies in requirements.txt
cd lambda
pip install -r requirements.txt --target .
```

### DynamoDB permission errors
```bash
# Check IAM role has correct policies
terraform state show aws_iam_role_policy.lambda_policy
```

### API Gateway 403 errors
```bash
# Verify API key is correct
terraform output -raw admin_api_key_value
```

## Cost Optimization

Current optimizations:
- ✅ On-demand DynamoDB (no provisioned capacity)
- ✅ Single-table design (one table vs multiple)
- ✅ Minimal GSIs (only ModerationStatusIndex)
- ✅ 512MB Lambda memory (balance cost/performance)
- ✅ 7-day log retention (vs default infinite)
- ✅ No point-in-time recovery (enable if needed)
- ✅ Efficient query patterns (GSI vs scan)

## Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
2. Review CloudWatch logs
3. Verify Terraform outputs
4. Check API documentation

## License

Part of the Neuroboy Memorial Website project.
