// SEC-26: Security Response Headers Missing
// Test: TC-CR-032
package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    // No CSP, HSTS, X-Frame-Options, X-Content-Type-Options headers configured
}
