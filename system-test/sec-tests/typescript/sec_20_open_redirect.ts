// SEC-20: Open Redirect
// Test: TC-CR-027
import express, { Request, Response } from 'express';

const app = express();

app.get('/redirect', (req: Request, res: Response) => {
  const target: string = req.query.next as string;
  res.redirect(target);  // Unvalidated redirect
});
