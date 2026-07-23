// SEC-33: Insecure Randomness
// Test: TC-CR-038
package com.example;

import java.util.Random;

public class TokenService {
    private Random random = new Random();  // Not cryptographically secure

    public String generateResetToken() {
        return String.valueOf(100000 + random.nextInt(900000));
    }
}
