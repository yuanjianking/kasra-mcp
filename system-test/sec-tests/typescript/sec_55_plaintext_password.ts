// SEC-55: Sensitive Data Plaintext Storage
// Test: TC-CR-058
async function registerUser(username: string, password: string) {
  await db.collection('users').insertOne({
    username,
    password  // Plaintext — no hash
  });
}
