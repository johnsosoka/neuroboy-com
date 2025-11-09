#!/bin/bash

# Memorial Website Deployment Script
# Deploys the static Next.js build to AWS S3

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default values
ENVIRONMENT="staging"
AWS_PROFILE="jscom"
DRY_RUN=""

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
    -h|--help)
      echo "Usage: ./deploy.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  -e, --environment ENV    Target environment: staging, www, apex (default: staging)"
      echo "  -p, --profile PROFILE    AWS profile to use (default: jscom)"
      echo "  --dry-run                Run without making changes"
      echo "  -h, --help               Show this help message"
      echo ""
      echo "Examples:"
      echo "  ./deploy.sh                           # Deploy to staging"
      echo "  ./deploy.sh -e www                    # Deploy to www subdomain"
      echo "  ./deploy.sh -e apex                   # Deploy to apex domain"
      echo "  ./deploy.sh -e staging --dry-run      # Test deployment to staging"
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

# Determine S3 bucket based on environment
case $ENVIRONMENT in
  staging|stage)
    S3_BUCKET="s3://stage.neuroboy.com/"
    ;;
  www)
    S3_BUCKET="s3://www.neuroboy.com/"
    ;;
  apex|root|production|prod)
    S3_BUCKET="s3://neuroboy.com/"
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

# Check if build exists
if [ ! -d "out" ]; then
  echo -e "${RED}Error: Build directory 'out' not found${NC}"
  echo "Please run 'npm run build' first"
  exit 1
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
  echo -e "${GREEN}✓ Deployment successful!${NC}"

  if [ -z "$DRY_RUN" ]; then
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
  echo -e "${RED}✗ Deployment failed${NC}"
  exit 1
fi
