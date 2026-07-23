// SEC-64: Certificate Pinning Missing — no SSL pinning in Android app
// Test: TC-CR-067
package com.example;

import okhttp3.OkHttpClient;

public class ApiClient {
    private OkHttpClient httpClient;

    public ApiClient() {
        // OkHttpClient built without CertificatePinner
        // Accepts any certificate from any CA
        // Vulnerable to MITM attacks
        httpClient = new OkHttpClient.Builder()
                .build();  // No certificate pinning!
    }

    public void fetchData() {
        // All API calls use the unpinned client
        httpClient.newCall(
            new okhttp3.Request.Builder()
                .url("https://api.example.com/user-data")
                .build()
        ).enqueue(new okhttp3.Callback() {
            @Override
            public void onFailure(okhttp3.Call call, java.io.IOException e) {}

            @Override
            public void onResponse(okhttp3.Call call, okhttp3.Response response) {
                // Process potentially MITM'ed response
            }
        });
    }
}
