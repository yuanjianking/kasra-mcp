// SEC-35: Insecure Certificate Storage
// Test: TC-CR-040
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false,
  secureOptions: https.constants.SSL_OP_NO_VERIFY
});
