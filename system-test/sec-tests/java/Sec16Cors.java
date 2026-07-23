// SEC-16: CORS Misconfiguration
// Test: TC-CR-023
package com.example;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.*;

public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowCredentials(true);  // CORS with wildcard origin and credentials
    }
}
