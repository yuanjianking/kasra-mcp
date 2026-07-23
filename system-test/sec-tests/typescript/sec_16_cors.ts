// SEC-16: CORS Misconfiguration
// Test: TC-CR-023
import cors from 'cors';

app.use(cors({
  origin: '*',  // Wildcard — too permissive
  credentials: true  // Dangerous with wildcard
}));
