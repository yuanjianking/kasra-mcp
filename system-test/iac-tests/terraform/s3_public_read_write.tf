# IAC-08: Terraform Storage Security — S3 bucket with public-read-write ACL
# Additional test: Full public write access
resource "aws_s3_bucket" "public_uploads" {
  bucket = "my-public-uploads-bucket"
  acl    = "public-read-write"
}

resource "aws_s3_bucket_public_access_block" "no_block" {
  bucket = aws_s3_bucket.public_uploads.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
