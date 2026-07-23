// SEC-50: Error Handling Information Leak
// Test: TC-CR-054
import express, { Request, Response } from 'express';

app.get('/api/data', async (req: Request, res: Response) => {
  try {
    const data = await queryDB();
    res.json(data);
  } catch (err: any) {
    res.status(500).send(`Error: ${err.message} [${err.stack}]`);  // Leaks internals
  }
});
