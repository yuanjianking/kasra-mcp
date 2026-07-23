// SEC-35: Insecure Certificate Storage
// Test: TC-CR-040
package com.example;

import javax.net.ssl.HostnameVerifier;

public class InsecureHostnameVerifier {

    public void configure() {
        // Accepts all hostnames — dangerous
        HostnameVerifier verifier = (hostname, sslSession) -> true;
        HttpsURLConnection.setDefaultHostnameVerifier(verifier);
    }
}
