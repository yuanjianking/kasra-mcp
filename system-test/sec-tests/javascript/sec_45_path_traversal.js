// SEC-45: Path Traversal
// Test: TC-CR-049
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/download', (req, res) => {
  const fileName = req.query.file;
  const filePath = path.join('/var/data/', fileName);  // User input not sanitized
  res.download(filePath);
});
