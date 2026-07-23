// SEC-58: Brute Force Protection Missing
// Test: TC-CR-061
package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        // No rate limiting, no account lockout mechanism
        if (authenticate(username, password)) {
            return "Login success";
        }
        return "Login failed";
    }
}
