// SEC-35: Insecure Certificate Storage
// Test: TC-CR-040
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,  // Dangerous
  secureOptions: 0
});
