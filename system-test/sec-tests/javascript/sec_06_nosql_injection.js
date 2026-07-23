// SEC-06: NoSQL Injection
// Test: TC-CR-012
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const db = client.db('test');

  const user = await db.collection('users').findOne({
    username: username,
    password: { $ne: null }  // $ne bypass
  });

  if (user) res.send('Login success');
  else res.send('Login failed');
});
