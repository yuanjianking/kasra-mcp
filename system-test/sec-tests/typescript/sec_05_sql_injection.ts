// SEC-05: SQL Injection
// Test: TC-CR-011
import { Pool } from 'pg';

const pool = new Pool();

async function getUser(username: string) {
  const query = `SELECT * FROM users WHERE name = '${username}'`;  // string interpolation in SQL
  const result = await pool.query(query);
  return result.rows;
}
