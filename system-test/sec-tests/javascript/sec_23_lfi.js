// SEC-23: Local File Inclusion
// Test: TC-CR-021
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/page', (req, res) => {
  const page = req.query.page;
  const content = fs.readFileSync(`/var/www/${page}`);  // Path traversal
  res.send(content);
});
