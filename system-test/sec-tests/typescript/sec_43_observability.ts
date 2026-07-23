// SEC-43: Observability Data Leak
// Test: TC-CR-047-B
import express, { Request, Response } from 'express';

const app = express();

app.get('/debug/env', (req: Request, res: Response) => {
  res.json(process.env);  // Exposes all env vars including secrets
});
