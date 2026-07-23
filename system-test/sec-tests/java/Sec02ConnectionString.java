// SEC-02: Hardcoded Connection Strings
// Test: TC-CR-005, TC-CR-008
package com.example;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConfig {
    public Connection getConnection() throws Exception {
        String url = "jdbc:mysql://root:admin123@localhost:3306/testdb";
        return DriverManager.getConnection(url);
    }

    public Connection getPgConnection() throws Exception {
        String url = "jdbc:postgresql://admin:MyPassw0rd!@prod-db.example.com:5432/mydb";
        return DriverManager.getConnection(url);
    }
}
