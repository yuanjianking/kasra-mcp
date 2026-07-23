// SEC-39: Dependency Confusion
// Test: TC-CR-044
// package.json may contain dependencies that don't exist in public npm:
// {
//   "dependencies": {
//     "@company-internal-pkg": "^1.0.0",  // Could be registered by attacker
//     "@acme-private-lib": "^2.3.0"
//   }
// }
