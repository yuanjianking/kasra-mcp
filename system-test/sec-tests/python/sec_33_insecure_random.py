# SEC-33: Insecure Randomness
# Test: TC-CR-038
import random

def generate_reset_token():
    return str(random.randint(100000, 999999))
