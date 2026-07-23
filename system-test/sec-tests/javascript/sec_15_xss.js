// SEC-15: Cross-Site Scripting (XSS)
// Test: TC-CR-022
const express = require('express');
const app = express();

app.get('/comment', (req, res) => {
  const comment = req.query.text;
  res.send(`<div id="output">${comment}</div>`);  // XSS — unsanitized input in HTML
});
