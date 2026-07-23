// SEC-57: Audit Log Missing
// Test: TC-CR-060
package com.example;

import java.sql.*;

public class AdminService {

    public void deleteUser(int userId) throws Exception {
        Connection conn = getConnection();
        Statement stmt = conn.createStatement();
        stmt.execute("DELETE FROM users WHERE id = " + userId);
        // No audit log of who deleted this user or when
    }
}
