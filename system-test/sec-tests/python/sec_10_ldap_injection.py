# SEC-10: LDAP Injection — filter concatenation
# Test: TC-CR-016
import ldap

def search_user(username):
    conn = ldap.initialize('ldap://localhost')
    search_base = "dc=example,dc=com"
    query = "(uid=" + username + ")"
    return conn.search_s(search_base, ldap.SCOPE_SUBTREE, query)
