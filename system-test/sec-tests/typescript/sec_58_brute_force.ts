// SEC-58: Brute Force Protection Missing
// Test: TC-CR-061
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // No rate limiting, no lockout
  if (await authenticate(username, password)) {
    res.send('Login OK');
  } else {
    res.send('Login failed');
  }
});
