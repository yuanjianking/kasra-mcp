# SEC-52: Log Injection
# Test: TC-CR-056
import logging

def process_input(user_input):
    logging.info(f"User input: {user_input}")
