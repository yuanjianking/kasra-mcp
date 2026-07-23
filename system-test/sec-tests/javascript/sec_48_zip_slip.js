// SEC-48: Zip Slip / Archive Extraction
// Test: TC-CR-052
const AdmZip = require('adm-zip');

function extractZip(filePath) {
  const zip = new AdmZip(filePath);
  zip.extractAllTo('/tmp/extract/', true);  // No path traversal check
}
