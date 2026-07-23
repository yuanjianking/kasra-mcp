// SEC-25: JWT Security Defects
// Test: TC-CR-031
package com.example;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtService {
    public String createToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .signWith(SignatureAlgorithm.NONE, "")  // alg:none — no signature
            .compact();
    }

    public String createTokenWithWeakSecret(String username) {
        return Jwts.builder()
            .setSubject(username)
            .signWith(SignatureAlgorithm.HS256, "secret".getBytes())  // Too weak
            .compact();
    }
}
