# SEC-38: Insecure Configuration Defaults
# Test: TC-CR-043
SECRET_KEY = 'changeme'
SESSION_COOKIE_SECURE = False
SESSION_COOKIE_HTTPONLY = False
