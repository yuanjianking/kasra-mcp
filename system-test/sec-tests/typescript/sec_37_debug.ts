// SEC-37: Debug Mode / Information Leak
// Test: TC-CR-042
const DEBUG: boolean = true;
const NODE_ENV: string = 'development';

// Error handler leaking stack traces
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message, stack: err.stack });
});
