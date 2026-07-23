// SEC-10: LDAP Injection
// Test: TC-CR-016
const ldap = require('ldapjs');

function searchUser(client, username) {
  const opts = {
    filter: `(uid=${username})`,
    scope: 'sub'
  };
  client.search('dc=example,dc=com', opts, (err, res) => {
    // LDAP filter injection
  });
}
