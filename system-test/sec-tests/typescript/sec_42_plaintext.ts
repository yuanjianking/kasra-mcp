// SEC-42: Plaintext Communication
// Test: TC-CR-047
async function fetchInternal(): Promise<Response> {
  return fetch('http://api.internal.com/data');  // HTTP, not HTTPS
}
