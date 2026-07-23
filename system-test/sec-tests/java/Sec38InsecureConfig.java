// SEC-38: Insecure Configuration Defaults
// Test: TC-CR-043
package com.example;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {
    // application.properties:
    // server.ssl.enabled=false
    // spring.session.timeout=86400
    // management.endpoints.web.exposure.include=*
}
