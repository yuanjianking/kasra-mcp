// SEC-61: Insecure Local Storage (Android SharedPreferences)
// Test: TC-CR-064
package com.example;

import android.content.Context;
import android.content.SharedPreferences;

public class TokenStorage {
    private SharedPreferences prefs;

    public TokenStorage(Context context) {
        prefs = context.getSharedPreferences("myapp", Context.MODE_PRIVATE);
    }

    public void saveAuthToken(String token) {
        // Storing sensitive auth token in plain SharedPreferences
        prefs.edit().putString("auth_token", token).apply();
    }

    public void savePassword(String password) {
        // Storing password in plain SharedPreferences
        prefs.edit().putString("user_password", password).apply();
    }

    public String getAuthToken() {
        return prefs.getString("auth_token", "");
    }
}
