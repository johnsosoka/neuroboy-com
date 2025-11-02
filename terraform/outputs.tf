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
