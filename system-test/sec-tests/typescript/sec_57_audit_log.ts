// SEC-57: Audit Log Missing
// Test: TC-CR-060
app.delete('/users/:id', async (req: Request, res: Response) => {
  await db.collection('users').deleteOne({ _id: req.params.id });
  res.send('User deleted');
  // No audit log of deletion
});
