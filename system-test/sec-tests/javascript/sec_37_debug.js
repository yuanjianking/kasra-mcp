// SEC-37: Debug Mode / Information Leak
// Test: TC-CR-042
const DEBUG = true;
const NODE_ENV = 'development';

// Express error handler that leaks internals
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
    stack: err.stack,  // Leaks stack trace in production
    details: err
  });
});
