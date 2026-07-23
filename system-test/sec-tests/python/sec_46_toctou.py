# SEC-46: Race Condition / TOCTOU
# Test: TC-CR-050
import os

def delete_temp(temp_file):
    if os.path.exists(temp_file):
        # Race window: attacker swaps file here
        os.remove(temp_file)
