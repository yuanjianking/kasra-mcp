// SEC-55: Sensitive Data Plaintext Storage
// Test: TC-CR-058
const db = require('mongodb');

async function registerUser(username, password) {
  await db.collection('users').insertOne({
    username: username,
    password: password  // Plaintext — no hashing
  });
}
