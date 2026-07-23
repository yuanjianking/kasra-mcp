// SEC-22: IDOR — Insecure Direct Object Reference
// Test: TC-CR-029
package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/api/user/{userId}")
    public User getUser(@PathVariable Long userId) {
        // No ownership check — any user can access any userId
        return userRepository.findById(userId).orElse(null);
    }
}
