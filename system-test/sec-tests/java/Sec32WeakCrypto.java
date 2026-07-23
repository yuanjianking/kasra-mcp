// SEC-32: Weak Cryptographic Algorithms
// Test: TC-CR-037
package com.example;

import java.security.*;

public class CryptoService {

    public String hashPassword(String password) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");  // MD5 is weak
        return bytesToHex(md.digest(password.getBytes()));
    }

    public String hashSha1(String data) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-1");  // SHA-1 is deprecated
        return bytesToHex(md.digest(data.getBytes()));
    }
}
