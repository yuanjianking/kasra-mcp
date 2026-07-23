// SEC-12: Header Injection / CRLF
// Test: TC-CR-018
package com.example;

import javax.servlet.http.HttpServletResponse;

public class RedirectService {
    public void redirect(HttpServletResponse response, String url) {
        response.setHeader("Location", url);
    }
}
