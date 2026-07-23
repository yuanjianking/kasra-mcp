// SEC-19: SSRF — Server-Side Request Forgery
// Test: TC-CR-026
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();

app.get('/fetch', async (req: Request, res: Response) => {
  const url: string = req.query.url as string;
  const response = await axios.get(url);  // SSRF
  res.send(response.data);
});
