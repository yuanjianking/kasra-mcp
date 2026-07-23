// SEC-20: Open Redirect
// Test: TC-CR-027
const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
  const target = req.query.next;
  res.redirect(target);  // Unvalidated redirect
});
