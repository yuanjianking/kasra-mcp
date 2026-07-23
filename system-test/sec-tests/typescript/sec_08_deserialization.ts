// SEC-08: Unsafe Deserialization
// Test: TC-CR-014
import { unserialize } from 'node-serialize';

function loadData(serialized: string): unknown {
  return unserialize(serialized);  // RCE via deserialization
}
