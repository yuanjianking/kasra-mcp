// SEC-02: Hardcoded Connection Strings
// Test: TC-CR-005, TC-CR-008
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:MyPassw0rd!@prod-db.example.com:27017/mydb');

const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://root:admin123@localhost:5432/testdb'
});

const redis = require('redis');
const redisClient = redis.createClient({ url: 'redis://:secret123@redis.internal:6379' });
