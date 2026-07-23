// SEC-11: SSTI — Server-Side Template Injection
// Test: TC-CR-017
package com.example;

import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import freemarker.template.Template;

public class TemplateService {
    public Template processUserTemplate(String userTemplate) throws Exception {
        FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();
        Template template = new Template("user", userTemplate, configurer.getConfiguration());
        return template;
    }
}
