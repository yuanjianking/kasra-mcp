// SEC-26: Security Response Headers Missing
// Test: TC-CR-032
import express from 'express';

const app = express();
// No helmet or security header middleware
// Missing: CSP, HSTS, X-Frame-Options, X-Content-Type-Options

app.get('/', (req, res) => {
  res.send('Hello');
});
