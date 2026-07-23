// SEC-10: LDAP Injection
// Test: TC-CR-016
package com.example;

import javax.naming.directory.*;
import javax.naming.*;

public class LdapService {
    public NamingEnumeration<SearchResult> search(String username) throws Exception {
        Hashtable<String, String> env = new Hashtable<>();
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        DirContext ctx = new InitialDirContext(env);

        String filter = "(uid=" + username + ")";
        return ctx.search("dc=example,dc=com", filter, new SearchControls());
    }
}
