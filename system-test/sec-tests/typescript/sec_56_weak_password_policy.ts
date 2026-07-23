// SEC-56: Weak Password Policy
// Test: TC-CR-059
const MIN_PASSWORD_LENGTH: number = 4;

function isValid(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}
