// SEC-12: Header Injection / CRLF
// Test: TC-CR-018
const http = require('http');

function handleRedirect(res, url) {
  res.writeHead(302, { 'Location': url });  // Potential CRLF injection if url contains \r\n
  res.end();
}
