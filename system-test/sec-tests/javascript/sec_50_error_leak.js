// SEC-50: Error Handling Information Leak
// Test: TC-CR-054
const express = require('express');
const app = express();

app.get('/api/data', async (req, res) => {
  try {
    const data = await queryDatabase();
    res.json(data);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}\nStack: ${err.stack}`);  // Leaks internals
  }
});
