// SEC-03: Hardcoded Cryptographic Keys
// Test: TC-CR-006
package com.example;

import javax.crypto.spec.SecretKeySpec;

public class CryptoConfig {
    private static final String AES_KEY = "my_aes_key_1234567890123456";
    private static final String JWT_SECRET = "my_jwt_signing_secret_2024";
    private static final String HMAC_SECRET = "hmac_secret_value_here";

    public SecretKeySpec getAesKey() {
        return new SecretKeySpec(AES_KEY.getBytes(), "AES");
    }
}
