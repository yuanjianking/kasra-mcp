// SEC-43: Observability Data Leak
// Test: TC-CR-047-B
package com.example;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

@RestController
public class ActuatorController {

    @Autowired
    private Environment env;

    @GetMapping("/actuator/env")
    public String getEnv() {
        // Exposes all environment variables including SECRET_KEY, passwords
        return env.toString();
    }
}
