# SEC-25: JWT Security Defects — alg:none
# Test: TC-CR-031
import jwt

def create_token(payload):
    return jwt.encode(payload, key="", algorithm="none")
