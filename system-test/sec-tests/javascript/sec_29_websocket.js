// SEC-29: WebSocket / SSE Security
// Test: TC-CR-035
const WebSocket = require('ws');

const ws = new WebSocket('ws://internal-service:8080');  // Not WSS — unencrypted
