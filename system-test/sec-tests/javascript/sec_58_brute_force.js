// SEC-58: Brute Force Protection Missing
// Test: TC-CR-061
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // No rate limiting, no account lockout
  if (authenticate(username, password)) {
    res.send('Login success');
  } else {
    res.send('Login failed');
  }
});
