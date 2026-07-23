# SEC-26: Security Response Headers Missing
# Test: TC-CR-032
from flask import Flask

app = Flask(__name__)

@app.after_request
def no_security_headers(response):
    # No CSP, HSTS, X-Frame-Options headers added
    return response
