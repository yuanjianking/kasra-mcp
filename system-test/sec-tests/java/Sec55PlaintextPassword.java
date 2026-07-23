// SEC-55: Sensitive Data Plaintext Storage
// Test: TC-CR-058
package com.example;

import java.sql.*;

public class UserRegistrationService {

    public void register(String username, String password) throws Exception {
        Connection conn = getConnection();
        Statement stmt = conn.createStatement();
        stmt.execute("INSERT INTO users (username, password) VALUES ('"
            + username + "', '" + password + "')");  // Password stored in plaintext
    }
}
