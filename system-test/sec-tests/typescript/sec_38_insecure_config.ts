// SEC-38: Insecure Configuration Defaults
// Test: TC-CR-043
export const config = {
  secretKey: 'changeme',
  dbPassword: '',
  session: { secure: false, sameSite: 'none' as const }
};
