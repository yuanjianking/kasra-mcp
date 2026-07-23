// SEC-17: CSRF Protection Missing
// Test: TC-CR-024
import express, { Request, Response } from 'express';

const app = express();
app.post('/transfer', (req: Request, res: Response) => {
  const { amount, to } = req.body;
  // No CSRF token check
  makeTransfer(amount, to);
  res.send('OK');
});
