// SEC-66: Clipboard Leak — sensitive data copied to clipboard without notice
// Test: TC-CR-069
package com.example;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class PasswordActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Button copyButton = findViewById(R.id.copyPassword);
        EditText passwordField = findViewById(R.id.password);

        copyButton.setOnClickListener(v -> {
            String password = passwordField.getText().toString();

            // Copying password to clipboard without user notice
            ClipboardManager clipboard = (ClipboardManager)
                getSystemService(Context.CLIPBOARD_SERVICE);
            ClipData clip = ClipData.newPlainText("password", password);
            clipboard.setPrimaryClip(clip);
            // Any app on the device can now read the clipboard
            // No notification or timeout set on the clip
        });
    }
}
