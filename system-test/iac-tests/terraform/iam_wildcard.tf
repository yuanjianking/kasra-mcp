# IAC-10: Terraform IAM Security — wildcard actions
# Test: TC-IAC-013
resource "aws_iam_policy" "overly_permissive" {
  name = "wildcard-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "*"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy" "public_access" {
  name = "public-access-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "s3:*"
        Principal = "*"
        Resource = "*"
      }
    ]
  })
}
