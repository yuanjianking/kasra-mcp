// SEC-17: CSRF Protection Missing
// Test: TC-CR-024
const express = require('express');
const app = express();

app.post('/transfer', (req, res) => {
  const { amount, to } = req.body;
  // No CSRF token validation
  makeTransfer(amount, to);
  res.send('OK');
});
