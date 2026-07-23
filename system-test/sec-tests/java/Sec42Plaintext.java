// SEC-42: Plaintext Communication
// Test: TC-CR-047
package com.example;

import java.net.*;
import java.io.*;

public class HttpService {

    public String fetchInternalData() throws Exception {
        URL url = new URL("http://api.internal.com/data");  // HTTP, not HTTPS
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        // No TLS encryption
        return readResponse(conn);
    }
}
