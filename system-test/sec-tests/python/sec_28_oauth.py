# SEC-28: OAuth/OIDC Security Defects — missing state, implicit flow
# Test: TC-CR-034

def build_oauth_url(client_id, redirect_uri):
    # Missing state parameter, implicit grant
    url = f"https://auth.provider.com/oauth?response_type=token&client_id={client_id}&redirect_uri={redirect_uri}"
    return url
