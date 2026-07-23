#!/bin/bash
# SEC-07: OS Command Injection via user input
# Test: TC-CR-013

echo "Enter hostname:"
read hostname
ping -c 1 $hostname  # No input sanitization — command injection
