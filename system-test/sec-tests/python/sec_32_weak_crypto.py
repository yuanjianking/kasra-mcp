# SEC-32: Weak Cryptographic Algorithms — MD5/SHA-1
# Test: TC-CR-037
import hashlib

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()
