// SEC-16: CORS Misconfiguration
// Test: TC-CR-023
const cors = require('cors');
app.use(cors({
  origin: '*',  // Wildcard origin
  credentials: true  // With credentials — dangerous combination
}));
