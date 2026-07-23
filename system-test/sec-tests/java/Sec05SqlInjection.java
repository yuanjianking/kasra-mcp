// SEC-05: SQL Injection
// Test: TC-CR-011
package com.example;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

public class UserDao {
    public ResultSet findUser(String username, Connection conn) throws Exception {
        Statement stmt = conn.createStatement();
        String query = "SELECT * FROM users WHERE name = '" + username + "'";
        return stmt.executeQuery(query);
    }
}
