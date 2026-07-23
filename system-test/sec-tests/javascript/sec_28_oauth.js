// SEC-28: OAuth Security Defects
// Test: TC-CR-034
function buildOAuthUrl(clientId, redirectUri) {
  // Missing state parameter, implicit grant
  return `https://auth.example.com/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid`;
}
