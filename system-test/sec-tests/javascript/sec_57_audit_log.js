// SEC-57: Audit Log Missing
// Test: TC-CR-060
const db = require('mongodb');

app.delete('/users/:id', async (req, res) => {
  await db.collection('users').deleteOne({ _id: req.params.id });
  // No audit log entry recording who deleted this user
  res.send('User deleted');
});
