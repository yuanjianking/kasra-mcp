// SEC-04: Test Credentials Leftover
// Test: TC-CR-007
package com.example;

public class DbConfig {
    private String username = "admin";
    private String password = "password123";

    // Leftover test credentials in production code
    private String testUser = "test";
    private String testPass = "test123";
}
