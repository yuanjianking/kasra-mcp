// SEC-60: WebView Insecure Configuration (Android RCE risk)
// Test: TC-CR-063
package com.example;

import android.webkit.WebView;
import android.webkit.WebSettings;

public class WebViewActivity {
    private WebView webView;

    public void setupWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);  // JavaScript enabled
        webView.loadUrl("file:///android_asset/private.html");  // Local file access

        // Dangerous combination: JS + file:// = RCE
        webView.addJavascriptInterface(new Object() {
            @android.webkit.JavascriptInterface
            public String getSecret() {
                return "super_secret_key";
            }
        }, "Android");
    }
}
