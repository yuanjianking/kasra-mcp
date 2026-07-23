// SEC-05: SQL Injection
// Test: TC-CR-011
const mysql = require('mysql');

const connection = mysql.createConnection({ host: 'localhost', user: 'root' });

function getUser(username) {
  const query = `SELECT * FROM users WHERE name = '${username}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    return results;
  });
}
