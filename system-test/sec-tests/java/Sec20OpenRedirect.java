// SEC-20: Open Redirect
// Test: TC-CR-027
package com.example;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RedirectController {
    public void redirect(HttpServletResponse response, String target) throws IOException {
        response.sendRedirect(target);  // Unvalidated redirect parameter
    }
}
