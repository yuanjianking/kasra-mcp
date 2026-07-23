// SEC-19: SSRF — Server-Side Request Forgery
// Test: TC-CR-026
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  const response = await axios.get(url);  // SSRF — user-controlled URL
  res.send(response.data);
});
