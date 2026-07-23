// SEC-23: Local File Inclusion
// Test: TC-CR-021
import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();

app.get('/page', (req: Request, res: Response) => {
  const page: string = req.query.page as string;
  const content = fs.readFileSync(`/var/www/${page}`, 'utf8');
  res.send(content);
});
