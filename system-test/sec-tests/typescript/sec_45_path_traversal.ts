// SEC-45: Path Traversal
// Test: TC-CR-049
import path from 'path';
import fs from 'fs';

function readFile(fileName: string): string {
  const filePath = path.join('/var/data/', fileName);  // Unsanitized
  return fs.readFileSync(filePath, 'utf8');
}
