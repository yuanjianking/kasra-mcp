// SEC-22: IDOR — Insecure Direct Object Reference
// Test: TC-CR-029
import express, { Request, Response } from 'express';

const app = express();

app.get('/api/user/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  // No ownership check — any user can read any userId
  const user = await User.findById(userId);
  res.json(user);
});
