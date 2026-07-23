// SEC-37: Debug Mode / Information Leak
// Test: TC-CR-042
package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    // spring.application.name=myapp
    // spring.profiles.active=development
    // server.error.include-stacktrace=always — leaks internal info
}
