// SEC-46: Race Condition / TOCTOU
// Test: TC-CR-050
import fs from 'fs';

function deleteFile(filePath: string): void {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);  // Race window between check and use
  }
}
