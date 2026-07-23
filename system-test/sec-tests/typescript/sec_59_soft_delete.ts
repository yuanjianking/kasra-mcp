// SEC-59: Incomplete Data Deletion / Residual Data
// Test: TC-CR-062
app.delete('/users/:id', async (req: Request, res: Response) => {
  await db.collection('users').updateOne(
    { _id: req.params.id },
    { $set: { isDeleted: true } }
  );
  // Associated data not cascaded
  res.send('Soft deleted');
});
