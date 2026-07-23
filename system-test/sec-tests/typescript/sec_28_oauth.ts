// SEC-28: OAuth Security Defects
// Test: TC-CR-034
function buildOAuthUrl(clientId: string, redirectUri: string): string {
  return `https://auth.example.com/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}`;
  // Missing: state parameter, PKCE, using implicit grant
}
