// SEC-27: Session Management Defects
// Test: TC-CR-033
import session from 'express-session';

app.use(session({
  secret: 'keyboard cat',  // Weak secret
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,  // Not Secure
    httpOnly: false,  // Not HttpOnly
    maxAge: 86400000 * 30  // 30 day expiry — too long
  }
}));
