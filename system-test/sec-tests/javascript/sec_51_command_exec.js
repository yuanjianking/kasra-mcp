// SEC-51: Unsafe Direct Command Execution
// Test: TC-CR-055
const { execSync } = require('child_process');

function run(userInput) {
  return execSync(`sh -c '${userInput}'`, { encoding: 'utf8' });
}
