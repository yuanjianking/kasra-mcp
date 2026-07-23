// SEC-13: Prototype Pollution
// Test: TC-CR-019
const _ = require('lodash');

app.post('/api/config', (req, res) => {
  _.merge(session.config, req.body);  // Prototype pollution
  res.send('Config updated');
});
