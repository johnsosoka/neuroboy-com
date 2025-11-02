provider "aws" {
  region = "us-west-2"
}

provider "aws" {
  alias  = "east"
  region = "us-east-1"
}

// Remote state backend
terraform {
  backend "s3" {
    bucket         = "jscom-tf-backend"
    key            = "project/neuroboy-com/state/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform-state"
  }
}

// Reference core infrastructure outputs
data "terraform_remote_state" "core" {
  backend = "s3"
  config = {
    bucket = "jscom-tf-backend"
    key    = "project/jscom-core-infra/state/terraform.tfstate"
    region = "us-west-2"
  }
}

// Locals
locals {
  domain_name   = "neuroboy.com"
  project_name  = "neuroboy-com"
  zone_id       = data.terraform_remote_state.core.outputs.root_neuroboycom_zone_id
  cert_arn      = data.terraform_remote_state.core.outputs.neuroboy_acm_cert_global
}
