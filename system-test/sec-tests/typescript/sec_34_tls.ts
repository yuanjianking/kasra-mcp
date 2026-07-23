// SEC-34: TLS/SSL Certificate Validation Disabled
// Test: TC-CR-039
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';  // Global TLS skip

import https from 'https';
const agent = new https.Agent({ rejectUnauthorized: false });
