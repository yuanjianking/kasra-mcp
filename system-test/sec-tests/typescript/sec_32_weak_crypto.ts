// SEC-32: Weak Cryptographic Algorithms
// Test: TC-CR-037
import crypto from 'crypto';

function hashPassword(password: string): string {
  return crypto.createHash('md5').update(password).digest('hex');  // MD5 is weak
}
