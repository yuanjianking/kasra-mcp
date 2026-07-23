// SEC-62: Deep Link Hijack — exported Activity without permission checks
// Test: TC-CR-065
package com.example;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

public class LoginActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        if (Intent.ACTION_VIEW.equals(intent.getAction())) {
            // Deep link handling without any authentication
            String token = intent.getData().getQueryParameter("token");
            if (token != null) {
                // Auto-login with token from deep link — no validation
                autoLogin(token);
            }
        }
    }

    private void autoLogin(String token) {
        // Process login without verifying token source or origin
        getSharedPreferences("session", MODE_PRIVATE)
            .edit().putString("session_token", token).apply();
    }
}
