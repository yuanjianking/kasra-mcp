# IAC-11: Terraform General Security — local state, no version pinning
# Test: TC-IAC-014
terraform {
  backend "local" {}
  required_version = ">= 0.12"
}

provider "aws" {
  region = "us-west-2"
  # No version constraint — may use outdated provider
}
