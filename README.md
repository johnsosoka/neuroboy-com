# neuroboy.com

Personal projects and API services for neuroboy.com

## Infrastructure

This repository manages the static website infrastructure for neuroboy.com using Terraform and AWS.

### Components

- **www.neuroboy.com**: Main production website (S3 + CloudFront)
- **stage.neuroboy.com**: Staging environment for testing (S3 + CloudFront)

### Prerequisites

- Terraform >= 1.5
- AWS CLI configured with `jscom` profile
- Access to jscom-tf-backend S3 bucket

### Deployment

```bash
cd terraform

# Initialize terraform
export AWS_PROFILE=jscom
terraform init

# Plan infrastructure changes
terraform plan

# Apply changes
terraform apply
```

### Deploying Website Content

```bash
# Deploy to www
aws s3 sync website/ s3://www.neuroboy.com/ --profile jscom

# Deploy to stage
aws s3 sync website/ s3://stage.neuroboy.com/ --profile jscom
```

### Infrastructure Outputs

After `terraform apply`, get the resource IDs:

```bash
terraform output
```

## Website

The `website/` directory contains the static HTML site deployed to both www and stage environments.

## Dependencies

This project depends on:
- **jscom-core-infrastructure**: Provides Route53 hosted zone and ACM certificates
- **jscom-tf-modules**: Reusable Terraform modules for static websites

## Related Projects

- [jscom-core-infrastructure](https://github.com/johnsosoka/jscom-core-infrastructure) - Foundation infrastructure
- [jscom-tf-modules](https://github.com/johnsosoka/jscom-tf-modules) - Terraform modules
