// SEC-25: JWT Security Defects
// Test: TC-CR-031
const jwt = require('jsonwebtoken');

function createToken(payload) {
  return jwt.sign(payload, '', { algorithm: 'none' });  // alg:none
}

function createWeakToken(payload) {
  return jwt.sign(payload, 'secret', { algorithm: 'HS256' });  // Weak secret
}

function decodeToken(token) {
  return jwt.decode(token, { complete: true });  // No signature verification
}
