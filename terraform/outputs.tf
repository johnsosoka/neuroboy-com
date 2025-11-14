// Bucket names for deployment
output "root_bucket" {
  description = "S3 bucket for neuroboy.com"
  value       = "neuroboy.com"
}

output "www_bucket" {
  description = "S3 bucket for www.neuroboy.com"
  value       = "www.neuroboy.com"
}

output "stage_bucket" {
  description = "S3 bucket for stage.neuroboy.com"
  value       = "stage.neuroboy.com"
}

// CloudFront distribution IDs for cache invalidation
output "root_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for neuroboy.com"
  value       = module.root.cloudfront_distribution_id
}

output "www_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for www.neuroboy.com"
  value       = module.www.cloudfront_distribution_id
}

output "stage_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for stage.neuroboy.com"
  value       = module.stage.cloudfront_distribution_id
}
