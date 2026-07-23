// SEC-27: Session Management Defects
// Test: TC-CR-033
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'keyboard cat',  // Weak secret
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,  // Missing Secure flag
    httpOnly: false,  // Missing HttpOnly flag
    sameSite: 'none'  // Permissive SameSite
  }
}));
