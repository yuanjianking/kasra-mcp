// SEC-19: SSRF — Server-Side Request Forgery
// Test: TC-CR-026
package com.example;

import java.net.*;
import java.io.*;

public class ProxyService {
    public String fetchUrl(String url) throws Exception {
        URL target = new URL(url);
        HttpURLConnection conn = (HttpURLConnection) target.openConnection();
        BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        return response.toString();
    }
}
