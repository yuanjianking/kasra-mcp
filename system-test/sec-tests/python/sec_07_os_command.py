# SEC-07: OS Command Injection — os.system with user input
# Test: TC-CR-013
import os

def ping_host(hostname):
    os.system("ping -c 1 " + hostname)
