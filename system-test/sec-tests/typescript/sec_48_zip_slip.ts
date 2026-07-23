// SEC-48: Zip Slip / Archive Extraction
// Test: TC-CR-052
import AdmZip from 'adm-zip';

function extractZip(filePath: string): void {
  const zip = new AdmZip(filePath);
  zip.extractAllTo('/tmp/extract/', true);  // No path traversal check
}
