# IAC-08: Terraform Storage Security — public S3 bucket
# Test: TC-IAC-011
resource "aws_s3_bucket" "data" {
  bucket = "my-public-data-bucket"
  acl    = "public-read"
}
