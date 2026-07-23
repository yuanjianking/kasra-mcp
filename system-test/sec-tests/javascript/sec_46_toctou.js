// SEC-46: Race Condition / TOCTOU
// Test: TC-CR-050
const fs = require('fs');

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    // Race window: attacker swaps file here
    fs.unlinkSync(filePath);
  }
}
