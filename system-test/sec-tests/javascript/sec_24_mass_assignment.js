// SEC-24: Mass Assignment
// Test: TC-CR-030
const express = require('express');
const app = express();

app.post('/users', async (req, res) => {
  const user = await User.create(req.body);  // Attacker can set isAdmin, role
  res.json(user);
});
