// SEC-28: OAuth Security Defects
// Test: TC-CR-034
package com.example;

public class OAuthService {

    public String buildAuthorizationUrl(String clientId, String redirectUri) {
        // Missing state parameter, implicit grant (response_type=token)
        return "https://auth.example.com/oauth2/authorize"
            + "?response_type=token"
            + "&client_id=" + clientId
            + "&redirect_uri=" + redirectUri
            + "&scope=openid";
    }
}
