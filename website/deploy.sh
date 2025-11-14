#!/bin/bash

# Memorial Website Deployment Script
# Deploys the static Next.js build to AWS S3 and invalidates CloudFront cache

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
ENVIRONMENT="staging"
AWS_PROFILE="jscom"
DRY_RUN=""
SKIP_BUILD=""

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -e|--environment)
      ENVIRONMENT="$2"
      shift 2
      ;;
    -p|--profile)
      AWS_PROFILE="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN="--dryrun"
      shift
      ;;
    --skip-build)
      SKIP_BUILD="true"
      shift
      ;;
    -h|--help)
      echo "Usage: ./deploy.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  -e, --environment ENV    Target environment: staging, www, apex (default: staging)"
      echo "  -p, --profile PROFILE    AWS profile to use (default: jscom)"
      echo "  --skip-build             Skip npm run build step"
      echo "  --dry-run                Run without making changes"
      echo "  -h, --help               Show this help message"
      echo ""
      echo "Examples:"
      echo "  ./deploy.sh                           # Build and deploy to staging"
      echo "  ./deploy.sh -e www                    # Build and deploy to www subdomain"
      echo "  ./deploy.sh -e apex                   # Build and deploy to apex domain"
      echo "  ./deploy.sh --skip-build              # Deploy existing build to staging"
      echo "  ./deploy.sh -e staging --dry-run      # Test deployment to staging"
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

# Determine S3 bucket and CloudFront distribution based on environment
case $ENVIRONMENT in
  staging|stage)
    S3_BUCKET="s3://stage.neuroboy.com/"
    CF_OUTPUT_NAME="stage_cloudfront_distribution_id"
    ;;
  www)
    S3_BUCKET="s3://www.neuroboy.com/"
    CF_OUTPUT_NAME="www_cloudfront_distribution_id"
    ;;
  apex|root|production|prod)
    S3_BUCKET="s3://neuroboy.com/"
    CF_OUTPUT_NAME="root_cloudfront_distribution_id"
    ;;
  *)
    echo -e "${RED}Invalid environment: $ENVIRONMENT${NC}"
    echo "Valid options: staging, www, apex"
    exit 1
    ;;
esac

echo -e "${YELLOW}Memorial Website Deployment${NC}"
echo "======================================"
echo "Environment: $ENVIRONMENT"
echo "S3 Bucket: $S3_BUCKET"
echo "AWS Profile: $AWS_PROFILE"
if [ -n "$DRY_RUN" ]; then
  echo -e "${YELLOW}DRY RUN MODE - No changes will be made${NC}"
fi
echo "======================================"
echo ""

# Build step
if [ -z "$SKIP_BUILD" ]; then
  echo -e "${BLUE}Building Next.js site...${NC}"
  npm run build
  if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ Build complete${NC}"
  echo ""
else
  echo -e "${YELLOW}Skipping build step (--skip-build flag set)${NC}"
  echo ""
  # Check if build exists when skipping
  if [ ! -d "out" ]; then
    echo -e "${RED}Error: Build directory 'out' not found${NC}"
    echo "Run without --skip-build flag or build manually with 'npm run build'"
    exit 1
  fi
fi

# Confirm deployment (unless dry run)
if [ -z "$DRY_RUN" ]; then
  read -p "Deploy to $S3_BUCKET? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled"
    exit 0
  fi
fi

# Deploy to S3
echo -e "${GREEN}Deploying to $S3_BUCKET...${NC}"
aws s3 sync out/ $S3_BUCKET \
  --profile $AWS_PROFILE \
  --delete \
  $DRY_RUN

if [ $? -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✓ S3 deployment successful!${NC}"
  echo ""

  # CloudFront cache invalidation
  if [ -z "$DRY_RUN" ]; then
    echo -e "${BLUE}Fetching CloudFront distribution ID...${NC}"

    # Get CloudFront distribution ID from terraform output
    TERRAFORM_DIR="../terraform"
    if [ -d "$TERRAFORM_DIR" ]; then
      cd "$TERRAFORM_DIR"
      CF_DISTRIBUTION_ID=$(terraform output -raw "$CF_OUTPUT_NAME" 2>/dev/null)
      cd - > /dev/null

      if [ -n "$CF_DISTRIBUTION_ID" ] && [ "$CF_DISTRIBUTION_ID" != "null" ]; then
        echo -e "${GREEN}✓ Distribution ID: $CF_DISTRIBUTION_ID${NC}"
        echo ""
        echo -e "${BLUE}Invalidating CloudFront cache...${NC}"

        INVALIDATION_OUTPUT=$(aws cloudfront create-invalidation \
          --distribution-id "$CF_DISTRIBUTION_ID" \
          --paths "/*" \
          --profile "$AWS_PROFILE" 2>&1)

        if [ $? -eq 0 ]; then
          INVALIDATION_ID=$(echo "$INVALIDATION_OUTPUT" | grep -o '"Id": "[^"]*"' | cut -d'"' -f4)
          echo -e "${GREEN}✓ CloudFront cache invalidation started${NC}"
          echo "  Invalidation ID: $INVALIDATION_ID"
          echo "  Note: Cache invalidation may take 5-15 minutes to complete"
        else
          echo -e "${YELLOW}⚠ Warning: CloudFront invalidation failed${NC}"
          echo "  You may need to manually invalidate the cache in AWS Console"
          echo "  Error: $INVALIDATION_OUTPUT"
        fi
      else
        echo -e "${YELLOW}⚠ Warning: Could not retrieve CloudFront distribution ID${NC}"
        echo "  Run 'cd ../terraform && terraform refresh' to populate outputs"
        echo "  Then invalidate cache manually or re-run deployment"
      fi
    else
      echo -e "${YELLOW}⚠ Warning: Terraform directory not found at $TERRAFORM_DIR${NC}"
      echo "  CloudFront cache invalidation skipped"
    fi

    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}✓ Deployment complete!${NC}"
    echo -e "${GREEN}========================================${NC}"

    case $ENVIRONMENT in
      staging|stage)
        echo "Visit: https://stage.neuroboy.com"
        ;;
      www)
        echo "Visit: https://www.neuroboy.com"
        ;;
      apex|root|production|prod)
        echo "Visit: https://neuroboy.com"
        ;;
    esac
  fi
else
  echo ""
  echo -e "${RED}✗ S3 deployment failed${NC}"
  exit 1
fi
