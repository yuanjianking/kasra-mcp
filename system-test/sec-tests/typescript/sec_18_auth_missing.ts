// SEC-18: Authentication Missing
// Test: TC-CR-025
import express, { Request, Response } from 'express';

const app = express();

app.get('/admin/users', (req: Request, res: Response) => {
  // No authentication guard — anyone can access
  res.json(getAllUsers());
});
