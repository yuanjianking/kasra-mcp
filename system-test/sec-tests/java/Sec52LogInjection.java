// SEC-52: Log Injection
// Test: TC-CR-056
package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AuditService {
    private static final Logger log = LoggerFactory.getLogger(AuditService.class);

    public void processUserInput(String userInput) {
        log.info("User input: {}", userInput);  // Unsanitized input in logs
    }
}
