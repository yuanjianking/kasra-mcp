// SEC-02: Hardcoded Connection Strings
// Test: TC-CR-005, TC-CR-008
import mongoose from 'mongoose';
mongoose.connect('mongodb://admin:MyPassw0rd!@prod-db.example.com:27017/mydb');

import { Pool } from 'pg';
const pool = new Pool({
  connectionString: 'postgresql://root:admin123@localhost:5432/testdb',
  max: 20
});
