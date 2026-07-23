// SEC-38: Insecure Configuration Defaults
// Test: TC-CR-043
module.exports = {
  secretKey: 'changeme',  // Default/weak secret
  dbPassword: '',
  session: {
    secure: false,
    sameSite: 'none'
  }
};
