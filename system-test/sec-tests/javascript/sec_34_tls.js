// SEC-34: TLS/SSL Certificate Validation Disabled
// Test: TC-CR-039
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';  // Disables TLS verification globally

const axios = require('axios');
async function fetchInsecure(url) {
  return axios.get(url, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
}
