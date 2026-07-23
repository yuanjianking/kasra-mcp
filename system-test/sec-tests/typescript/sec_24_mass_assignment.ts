// SEC-24: Mass Assignment
// Test: TC-CR-030
import express, { Request, Response } from 'express';

const app = express();

interface UserInput {
  username: string;
  email: string;
  isAdmin?: boolean;
}

app.post('/users', async (req: Request, res: Response) => {
  const user = await User.create(req.body);  // Attacker can set isAdmin
  res.json(user);
});
