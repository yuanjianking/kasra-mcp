// SEC-13: Prototype Pollution
// Test: TC-CR-019
import _ from 'lodash';

app.post('/api/config', (req: Request, res: Response) => {
  _.merge(req.session.config, req.body);  // Prototype pollution
  res.send('Config updated');
});
