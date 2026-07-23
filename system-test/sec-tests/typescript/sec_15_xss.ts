// SEC-15: Cross-Site Scripting (XSS)
// Test: TC-CR-022
import express, { Request, Response } from 'express';

const app = express();
app.get('/comment', (req: Request, res: Response) => {
  const comment: string = req.query.text as string;
  res.send(`<div id="output">${comment}</div>`);  // XSS — unsanitized
});
