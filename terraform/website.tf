// neuroboy.com - Apex domain
module "root" {
  source = "git::https://github.com/johnsosoka/jscom-tf-modules.git//modules/static-website?ref=main"

  domain_name  = local.domain_name
  root_zone_id = local.zone_id
  acm_cert_id  = local.cert_arn
}

// www.neuroboy.com - Main website
module "www" {
  source = "git::https://github.com/johnsosoka/jscom-tf-modules.git//modules/static-website?ref=main"

  domain_name  = "www.${local.domain_name}"
  root_zone_id = local.zone_id
  acm_cert_id  = local.cert_arn
}

// stage.neuroboy.com - Staging environment
module "stage" {
  source = "git::https://github.com/johnsosoka/jscom-tf-modules.git//modules/static-website?ref=main"

  domain_name  = "stage.${local.domain_name}"
  root_zone_id = local.zone_id
  acm_cert_id  = local.cert_arn
}
