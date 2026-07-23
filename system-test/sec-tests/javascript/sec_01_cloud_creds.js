// SEC-01: Hardcoded Cloud Credentials
// Test: TC-CR-001~004, TC-CR-009
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});

const GITHUB_TOKEN = 'ghp_abcdefghijklmnopqrstuvwxyz1234567890';
const STRIPE_SECRET = 'sk_live_abcdefghijklmnopqrstuvwxyz123456';
