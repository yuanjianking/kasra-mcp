// SEC-43: Observability Data Leak
// Test: TC-CR-047-B
const express = require('express');
const app = express();

// Expose all environment variables via debug endpoint
app.get('/debug/env', (req, res) => {
  res.json(process.env);  // Exposes SECRET_KEY, DB_PASSWORD, etc.
});

// Express status monitor without auth
require('express-status-monitor')({ title: 'Server Status' });
