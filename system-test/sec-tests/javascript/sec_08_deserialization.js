// SEC-08: Unsafe Deserialization
// Test: TC-CR-014
const unserialize = require('node-serialize');

function loadUserData(serializedData) {
  return unserialize.unserialize(serializedData);  // RCE via deserialization
}
