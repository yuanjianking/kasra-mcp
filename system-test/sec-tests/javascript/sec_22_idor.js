// SEC-22: IDOR — Insecure Direct Object Reference
// Test: TC-CR-029
const express = require('express');
const app = express();

app.get('/api/user/:userId', (req, res) => {
  const userId = req.params.userId;
  // No ownership check — any user can access any userId
  const user = db.collection('users').findById(userId);
  res.json(user);
});
