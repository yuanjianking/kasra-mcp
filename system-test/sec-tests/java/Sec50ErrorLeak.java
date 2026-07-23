// SEC-50: Error Handling Information Leak
// Test: TC-CR-054
package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
public class ErrorController {

    @GetMapping("/api/data")
    public String getData() {
        try {
            return queryDatabase();
        } catch (Exception e) {
            return "Error: " + e.getMessage() + " — " + e.getStackTrace()[0];  // Leaks internal info
        }
    }
}
