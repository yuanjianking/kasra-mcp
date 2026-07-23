// SEC-42: Plaintext Communication
// Test: TC-CR-047
function fetchInternalData() {
  return fetch('http://api.internal.com/data');  // HTTP not HTTPS
}
