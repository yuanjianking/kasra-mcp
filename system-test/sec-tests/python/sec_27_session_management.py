# SEC-27: Session Management Defects — predictable session ID
# Test: TC-CR-033
import hashlib

def create_session_id(username):
    return hashlib.md5(username.encode()).hexdigest()
