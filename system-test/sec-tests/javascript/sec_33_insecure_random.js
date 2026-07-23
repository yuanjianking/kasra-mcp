// SEC-33: Insecure Randomness
// Test: TC-CR-038
function generateResetToken() {
  return Math.floor(100000 + Math.random() * 900000).toString();  // Math.random() not crypto-safe
}

function generateApiKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}
