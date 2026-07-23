// SEC-27: Session Management Defects
// Test: TC-CR-033
package com.example;

import javax.servlet.http.HttpSession;

public class SessionService {

    public void configureSession(HttpSession session) {
        // Missing security flags
        session.setMaxInactiveInterval(86400);  // 24h timeout — too long
    }
}
