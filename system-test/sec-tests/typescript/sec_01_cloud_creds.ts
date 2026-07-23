// SEC-01: Hardcoded Cloud Credentials
// Test: TC-CR-001~004
import { S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
  }
});

const GITHUB_TOKEN: string = 'ghp_abcdefghijklmnopqrstuvwxyz1234567890';
const STRIPE_KEY: string = 'sk_live_abcdefghijklmnopqrstuvwxyz123456';
