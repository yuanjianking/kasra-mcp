// SEC-56: Weak Password Policy
// Test: TC-CR-059
const MIN_PASSWORD_LENGTH = 4;  // Too short

function isValidPassword(password) {
  return password.length >= MIN_PASSWORD_LENGTH;
}
