// SEC-24: Mass Assignment
// Test: TC-CR-030
package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserRegistrationController {

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        // Attacker can set isAdmin=true, role=ADMIN via request body
        return userRepository.save(user);
    }
}
