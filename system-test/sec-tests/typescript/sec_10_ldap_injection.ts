// SEC-10: LDAP Injection
// Test: TC-CR-016
import { createClient } from 'ldapjs';

function searchUser(username: string) {
  const client = createClient({ url: 'ldap://localhost:389' });
  const opts = {
    filter: `(uid=${username})`,  // Injection
    scope: 'sub' as const
  };
  client.search('dc=example,dc=com', opts, (err, res) => {});
}
