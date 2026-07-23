// SEC-56: Weak Password Policy
// Test: TC-CR-059
package com.example;

public class PasswordPolicy {
    private static final int MIN_PASSWORD_LENGTH = 4;  // Too short

    public boolean isValid(String password) {
        return password.length() >= MIN_PASSWORD_LENGTH;
    }
}
