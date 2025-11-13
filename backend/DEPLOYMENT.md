# Backend Deployment Guide

This guide covers deploying the Neuroboy Memorial API backend infrastructure to AWS.

## Prerequisites

### Required Tools
- **AWS CLI** v2.x - [Install](https://aws.amazon.com/cli/)
- **Terraform** v1.0+ - [Install](https://www.terraform.io/downloads)
- **Python** 3.11
- **pip** for Python package management

### AWS Configuration
Ensure your AWS profile is configured:
```bash
aws configure --profile jscom
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Default region: us-west-2
# Default output format: json
```

Verify profile:
```bash
aws sts get-caller-identity --profile jscom
```

## Project Structure

```
neuroboy-com/
├── backend/
│   ├── lambda/
│   │   ├── handler.py           # Main Lambda entry point
│   │   ├── guestbook.py         # Guestbook handlers
│   │   ├── stories.py           # Stories handlers
│   │   ├── requirements.txt     # Python dependencies
│   │   └── utils/
│   │       ├── dynamodb.py      # DynamoDB utilities
│   │       └── powertools_config.py  # AWS Powertools config
│   ├── API.md                   # API documentation
│   └── DEPLOYMENT.md           # This file
├── terraform/
│   └── backend/
│       ├── main.tf              # Infrastructure definition
│       ├── variables.tf         # Input variables
│       └── outputs.tf           # Output values
```

## Deployment Steps

### Step 1: Install Python Dependencies

The Lambda function requires AWS Powertools and boto3. These will be packaged with the Lambda deployment.

```bash
cd backend/lambda

# Create virtual environment (optional, for local testing)
python3.11 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Step 2: Initialize Terraform

```bash
cd ../../terraform/backend

# Export AWS profile
export AWS_PROFILE=jscom

# Initialize Terraform (downloads providers, configures backend)
terraform init
```

Expected output:
```
Initializing the backend...
Initializing provider plugins...
Terraform has been successfully initialized!
```

### Step 3: Review Terraform Plan

Preview the infrastructure changes:

```bash
terraform plan
```

This will show:
- DynamoDB table creation
- Lambda function with dependencies
- API Gateway REST API
- IAM roles and policies
- CloudWatch log groups
- API key for admin access

Review the plan carefully to ensure everything looks correct.

### Step 4: Deploy Infrastructure

Apply the Terraform configuration:

```bash
terraform apply
```

Type `yes` when prompted to confirm.

Deployment takes approximately 2-3 minutes.

### Step 5: Save Important Outputs

After successful deployment, Terraform outputs important values:

```bash
# View all outputs
terraform output

# Get specific outputs
terraform output api_gateway_url
terraform output admin_api_key_value
```

**Save these values securely:**

1. **API Gateway URL** - Your API endpoint
   ```
   https://abcd1234.execute-api.us-west-2.amazonaws.com/prod
   ```

2. **Admin API Key** - For moderation endpoints
   ```bash
   # Store in password manager or secure location
   terraform output -raw admin_api_key_value
   ```

3. **Lambda Function Name** - For monitoring/debugging
   ```bash
   terraform output lambda_function_name
   ```

### Step 6: Test the Deployment

#### Test Health Endpoint
```bash
API_URL=$(terraform output -raw api_gateway_url)
curl "${API_URL}/health"
```

Expected response:
```json
{
  "status": "healthy",
  "service": "neuroboy-memorial-api",
  "version": "1.0.0"
}
```

#### Test Guestbook Submission
```bash
curl -X POST "${API_URL}/guestbook" \
  -H "Content-Type: application/json" \
  -d '{
    "authorName": "Test User",
    "relationship": "Testing",
    "message": "This is a test guestbook entry for deployment verification."
  }'
```

Expected response (201 Created):
```json
{
  "message": "Guestbook entry submitted successfully. It will appear after moderation.",
  "entry": {
    "id": "...",
    "message": "This is a test guestbook entry for deployment verification.",
    ...
  }
}
```

#### Test Admin Endpoint
```bash
ADMIN_KEY=$(terraform output -raw admin_api_key_value)

curl -X GET "${API_URL}/admin/guestbook" \
  -H "X-Api-Key: ${ADMIN_KEY}"
```

Expected response (should include the test entry):
```json
{
  "entries": [ ... ],
  "count": 1
}
```

## Post-Deployment Configuration

### 1. Update Frontend Environment Variables

Add the API URL to your Next.js environment:

```bash
# In website/.env.local
NEXT_PUBLIC_API_URL=https://your-api-id.execute-api.us-west-2.amazonaws.com/prod
```

### 2. Configure CORS (Production)

Update the CORS settings in `backend/lambda/handler.py`:

```python
def cors_headers() -> Dict[str, str]:
    return {
        'Access-Control-Allow-Origin': 'https://neuroboy.com',  # Your domain
        'Access-Control-Allow-Headers': 'Content-Type,X-Api-Key',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Content-Type': 'application/json'
    }
```

Then redeploy:
```bash
cd backend/lambda
# Make your changes
cd ../../terraform/backend
terraform apply
```

### 3. Set Up CloudWatch Alarms (Optional)

Create alarms for monitoring:

```bash
# High error rate alarm
aws cloudwatch put-metric-alarm \
  --alarm-name neuroboy-api-high-errors \
  --alarm-description "High error rate in memorial API" \
  --metric-name Errors \
  --namespace AWS/Lambda \
  --statistic Sum \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold \
  --dimensions Name=FunctionName,Value=$(terraform output -raw lambda_function_name) \
  --profile jscom
```

### 4. Test Moderation Workflow

1. Submit a test entry via the public API
2. Retrieve pending entries with admin API key
3. Approve the entry
4. Verify it appears in public GET endpoint

## Monitoring & Maintenance

### View Lambda Logs

```bash
FUNCTION_NAME=$(terraform output -raw lambda_function_name)

# Tail logs in real-time
aws logs tail "/aws/lambda/${FUNCTION_NAME}" --follow --profile jscom

# View recent logs
aws logs tail "/aws/lambda/${FUNCTION_NAME}" --since 1h --profile jscom
```

### View DynamoDB Items

```bash
TABLE_NAME=$(terraform output -raw dynamodb_table_name)

# Scan table (returns first 1MB)
aws dynamodb scan --table-name "${TABLE_NAME}" --profile jscom

# Get specific item
aws dynamodb get-item \
  --table-name "${TABLE_NAME}" \
  --key '{"PK": {"S": "GUESTBOOK#<uuid>"}, "SK": {"S": "METADATA"}}' \
  --profile jscom
```

### Monitor Costs

Check AWS Cost Explorer:
```bash
aws ce get-cost-and-usage \
  --time-period Start=2024-01-01,End=2024-01-31 \
  --granularity MONTHLY \
  --metrics "BlendedCost" \
  --filter file://cost-filter.json \
  --profile jscom
```

Expected monthly costs: **$5-15** for low traffic.

### Update Lambda Code

When you make changes to Lambda code:

```bash
cd backend/lambda

# Make your changes to Python files

# Navigate to Terraform directory
cd ../../terraform/backend

# Terraform will detect changes and re-package Lambda
terraform apply
```

Terraform automatically:
1. Creates new Lambda deployment package
2. Detects code changes via SHA hash
3. Deploys updated function
4. Triggers API Gateway redeployment

## Troubleshooting

### Lambda Function Errors

**View recent errors:**
```bash
aws logs filter-log-events \
  --log-group-name "/aws/lambda/$(terraform output -raw lambda_function_name)" \
  --filter-pattern "ERROR" \
  --max-items 10 \
  --profile jscom
```

**Common issues:**
- **Module import errors:** Ensure `requirements.txt` dependencies are installed
- **DynamoDB permissions:** Check IAM role has proper permissions
- **Environment variables:** Verify `TABLE_NAME` is set correctly

### API Gateway Issues

**Test Lambda directly (bypass API Gateway):**
```bash
aws lambda invoke \
  --function-name "$(terraform output -raw lambda_function_name)" \
  --payload '{"path":"/health","httpMethod":"GET"}' \
  --profile jscom \
  response.json

cat response.json
```

### DynamoDB Issues

**Check table status:**
```bash
aws dynamodb describe-table \
  --table-name "$(terraform output -raw dynamodb_table_name)" \
  --profile jscom
```

**Verify GSI:**
```bash
aws dynamodb describe-table \
  --table-name "$(terraform output -raw dynamodb_table_name)" \
  --query 'Table.GlobalSecondaryIndexes' \
  --profile jscom
```

## Rolling Back

If you need to rollback:

```bash
cd terraform/backend

# Destroy all resources
terraform destroy

# Type 'yes' to confirm
```

**Warning:** This will delete all data in DynamoDB!

## Updating Infrastructure

### Change Log Level
```bash
terraform apply -var="log_level=DEBUG"
```

### Change Environment
```bash
terraform apply -var="environment=staging"
```

This creates a separate staging environment without affecting production.

## Security Best Practices

1. **Rotate API Keys Regularly**
   ```bash
   # Generate new key
   terraform apply -replace="aws_api_gateway_api_key.admin_key"
   ```

2. **Enable AWS CloudTrail** (track API calls)

3. **Set up AWS Config** (monitor resource compliance)

4. **Review IAM Permissions** (principle of least privilege)

5. **Enable API Gateway Logging** (for audit trail)

## Disaster Recovery

### Backup DynamoDB

Enable point-in-time recovery:
```bash
aws dynamodb update-continuous-backups \
  --table-name "$(terraform output -raw dynamodb_table_name)" \
  --point-in-time-recovery-specification PointInTimeRecoveryEnabled=true \
  --profile jscom
```

**Note:** This increases costs (~$0.20 per GB/month).

### Export DynamoDB Data

```bash
TABLE_NAME=$(terraform output -raw dynamodb_table_name)
BUCKET_NAME="neuroboy-backups"

aws dynamodb export-table-to-point-in-time \
  --table-arn "arn:aws:dynamodb:us-west-2:ACCOUNT_ID:table/${TABLE_NAME}" \
  --s3-bucket "${BUCKET_NAME}" \
  --export-format DYNAMODB_JSON \
  --profile jscom
```

## CI/CD Integration (Future)

For automated deployments:

1. **GitHub Actions** or **GitLab CI**
2. Use **AWS OIDC** for authentication
3. Run `terraform plan` on PRs
4. Run `terraform apply` on merges to main
5. Run integration tests post-deployment

## Support & Resources

- **API Documentation:** `backend/API.md`
- **Terraform Docs:** https://www.terraform.io/docs
- **AWS Powertools:** https://docs.powertools.aws.dev/lambda/python/
- **DynamoDB Best Practices:** https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html

## Cost Monitoring Checklist

- [ ] Set up billing alerts in AWS Console
- [ ] Enable AWS Cost Explorer
- [ ] Review DynamoDB on-demand vs provisioned pricing
- [ ] Check Lambda execution duration (optimize if > 1s)
- [ ] Monitor API Gateway request count
- [ ] Review CloudWatch Logs retention (currently 7 days)

## Next Phase: Photo Uploads (Phase 3)

When ready to add photo uploads:
1. Add S3 bucket to Terraform
2. Create pre-signed URL generation endpoint
3. Add photo metadata table entries
4. Update Lambda with S3 permissions
5. Implement image optimization Lambda

See `API.md` for planned photo endpoints.
