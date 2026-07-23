// SEC-18: Authentication Missing
// Test: TC-CR-025
package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {

    @GetMapping("/admin/users")
    public String listUsers() {
        // No authentication or authorization check
        return "All users with sensitive data";
    }
}
