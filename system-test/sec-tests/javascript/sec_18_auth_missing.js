// SEC-18: Authentication Missing
// Test: TC-CR-025
const express = require('express');
const app = express();

app.get('/admin/users', (req, res) => {
  // No authentication middleware
  res.json({ users: getAllUsers() });
});
