// SEC-32: Weak Cryptographic Algorithms
// Test: TC-CR-037
const crypto = require('crypto');

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');  // MD5 is weak
}

function hashSha1(data) {
  return crypto.createHash('sha1').update(data).digest('hex');  // SHA-1 deprecated
}
