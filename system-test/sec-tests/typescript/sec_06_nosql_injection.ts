// SEC-06: NoSQL Injection
// Test: TC-CR-012
import { MongoClient } from 'mongodb';

async function login(username: string, password: string) {
  const client = new MongoClient('mongodb://localhost:27017');
  const users = client.db('app').collection('users');

  const user = await users.findOne({
    username: username,
    password: { $ne: null }  // $ne bypass
  });

  return user;
}
