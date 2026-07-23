# SEC-51: Unsafe Direct Command Execution
# Test: TC-CR-055
import subprocess

def run(user_input):
    return subprocess.check_output(f"sh -c '{user_input}'", shell=True)
