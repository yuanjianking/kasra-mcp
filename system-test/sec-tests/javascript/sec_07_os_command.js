// SEC-07: OS Command Injection
// Test: TC-CR-013
const { exec } = require('child_process');

function pingHost(hostname) {
  exec(`ping -c 1 ${hostname}`, (err, stdout) => {
    console.log(stdout);
  });
}
