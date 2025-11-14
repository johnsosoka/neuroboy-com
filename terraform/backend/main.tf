terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.0"
    }
  }

  backend "s3" {
    bucket = "jscom-tf-backend"
    key    = "neuroboy-backend/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

locals {
  project_name = "neuroboy-memorial"
  environment  = var.environment

  common_tags = {
    Project     = "neuroboy-memorial"
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# ===================================================================
# DynamoDB Single Table - Cost Optimized with On-Demand Pricing
# ===================================================================

resource "aws_dynamodb_table" "memorial_content" {
  name           = "${local.project_name}-content-${local.environment}"
  billing_mode   = "PAY_PER_REQUEST" # On-demand pricing - cost optimized
  hash_key       = "PK"
  range_key      = "SK"

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  # GSI for querying by moderation status and submission time
  attribute {
    name = "GSI1PK"
    type = "S"
  }

  attribute {
    name = "GSI1SK"
    type = "N"
  }

  global_secondary_index {
    name            = "ModerationStatusIndex"
    hash_key        = "GSI1PK"
    range_key       = "GSI1SK"
    projection_type = "ALL"
  }

  ttl {
    attribute_name = "ttl"
    enabled        = true
  }

  point_in_time_recovery {
    enabled = false # Disable to save costs
  }

  tags = merge(local.common_tags, {
    Name = "${local.project_name}-content-table"
  })
}

# ===================================================================
# Lambda Function - AWS Powertools for Python
# ===================================================================

# Package Lambda code
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../../backend/lambda"
  output_path = "${path.module}/lambda_function.zip"
}

# Lambda Execution Role
resource "aws_iam_role" "lambda_exec" {
  name = "${local.project_name}-lambda-exec-${local.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = local.common_tags
}

# Lambda Policy for DynamoDB and CloudWatch
resource "aws_iam_role_policy" "lambda_policy" {
  name = "${local.project_name}-lambda-policy"
  role = aws_iam_role.lambda_exec.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:Query",
          "dynamodb:Scan"
        ]
        Resource = [
          aws_dynamodb_table.memorial_content.arn,
          "${aws_dynamodb_table.memorial_content.arn}/index/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}

# Lambda Function
resource "aws_lambda_function" "api_handler" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = "${local.project_name}-api-${local.environment}"
  role            = aws_iam_role.lambda_exec.arn
  handler         = "handler.lambda_handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime         = "python3.11"
  timeout         = 30
  memory_size     = 512 # Cost-optimized memory size

  environment {
    variables = {
      TABLE_NAME    = aws_dynamodb_table.memorial_content.name
      ENVIRONMENT   = var.environment
      LOG_LEVEL     = var.log_level
      POWERTOOLS_SERVICE_NAME = "neuroboy-memorial-api"
    }
  }

  tags = local.common_tags
}

# CloudWatch Log Group with 7-day retention (cost optimized)
resource "aws_cloudwatch_log_group" "lambda_logs" {
  name              = "/aws/lambda/${aws_lambda_function.api_handler.function_name}"
  retention_in_days = 7

  tags = local.common_tags
}

# ===================================================================
# API Gateway REST API
# ===================================================================

resource "aws_api_gateway_rest_api" "memorial_api" {
  name        = "${local.project_name}-api-${local.environment}"
  description = "Memorial Website Community API"

  endpoint_configuration {
    types = ["REGIONAL"]
  }

  tags = local.common_tags
}

# API Gateway Resource - Proxy all requests to Lambda
resource "aws_api_gateway_resource" "proxy" {
  rest_api_id = aws_api_gateway_rest_api.memorial_api.id
  parent_id   = aws_api_gateway_rest_api.memorial_api.root_resource_id
  path_part   = "{proxy+}"
}

# ANY method for proxy resource
resource "aws_api_gateway_method" "proxy_any" {
  rest_api_id   = aws_api_gateway_rest_api.memorial_api.id
  resource_id   = aws_api_gateway_resource.proxy.id
  http_method   = "ANY"
  authorization = "NONE"
}

# Lambda integration
resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id = aws_api_gateway_rest_api.memorial_api.id
  resource_id = aws_api_gateway_resource.proxy.id
  http_method = aws_api_gateway_method.proxy_any.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.api_handler.invoke_arn
}

# Root path method
resource "aws_api_gateway_method" "root_any" {
  rest_api_id   = aws_api_gateway_rest_api.memorial_api.id
  resource_id   = aws_api_gateway_rest_api.memorial_api.root_resource_id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "root_lambda_integration" {
  rest_api_id = aws_api_gateway_rest_api.memorial_api.id
  resource_id = aws_api_gateway_rest_api.memorial_api.root_resource_id
  http_method = aws_api_gateway_method.root_any.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.api_handler.invoke_arn
}

# Lambda permission for API Gateway
resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api_handler.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.memorial_api.execution_arn}/*/*"
}

# API Gateway Deployment
resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on = [
    aws_api_gateway_integration.lambda_integration,
    aws_api_gateway_integration.root_lambda_integration
  ]

  rest_api_id = aws_api_gateway_rest_api.memorial_api.id

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.proxy.id,
      aws_api_gateway_method.proxy_any.id,
      aws_api_gateway_integration.lambda_integration.id,
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}

# API Gateway Stage
resource "aws_api_gateway_stage" "api_stage" {
  deployment_id = aws_api_gateway_deployment.api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.memorial_api.id
  stage_name    = var.environment

  # Cost optimization - disable detailed CloudWatch metrics
  xray_tracing_enabled = false

  tags = local.common_tags
}

# API Gateway Usage Plan (for rate limiting)
resource "aws_api_gateway_usage_plan" "memorial_usage_plan" {
  name = "${local.project_name}-usage-plan-${local.environment}"

  api_stages {
    api_id = aws_api_gateway_rest_api.memorial_api.id
    stage  = aws_api_gateway_stage.api_stage.stage_name
  }

  throttle_settings {
    burst_limit = 50   # Max concurrent requests
    rate_limit  = 100  # Requests per second
  }

  quota_settings {
    limit  = 10000 # Requests per period
    period = "DAY"
  }

  tags = local.common_tags
}

# API Key for admin operations
resource "aws_api_gateway_api_key" "admin_key" {
  name    = "${local.project_name}-admin-key-${local.environment}"
  enabled = true

  tags = local.common_tags
}

resource "aws_api_gateway_usage_plan_key" "admin_usage_plan_key" {
  key_id        = aws_api_gateway_api_key.admin_key.id
  key_type      = "API_KEY"
  usage_plan_id = aws_api_gateway_usage_plan.memorial_usage_plan.id
}
