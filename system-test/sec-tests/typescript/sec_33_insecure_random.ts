// SEC-33: Insecure Randomness
// Test: TC-CR-038
function generateResetToken(): string {
  return String(Math.floor(100000 + Math.random() * 900000));  // Math.random() not crypto-safe
}
