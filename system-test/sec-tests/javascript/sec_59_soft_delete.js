// SEC-59: Incomplete Data Deletion / Residual Data
// Test: TC-CR-062
app.delete('/users/:id', async (req, res) => {
  await db.collection('users').updateOne(
    { _id: req.params.id },
    { $set: { isDeleted: true } }
  );
  // Associated orders, comments, audit records NOT cleaned up
  res.send('User soft deleted');
});
