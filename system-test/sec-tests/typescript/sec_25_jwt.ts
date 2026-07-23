// SEC-25: JWT Security Defects
// Test: TC-CR-031
import jwt from 'jsonwebtoken';

function createToken(payload: object): string {
  return jwt.sign(payload, '', { algorithm: 'none' });  // alg:none
}

function decodeToken(token: string): unknown {
  return jwt.decode(token, { complete: true });  // No verification
}
