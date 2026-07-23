# SEC-45: Path Traversal
# Test: TC-CR-049
import os

def read_file(filename):
    path = os.path.join('/var/data/', filename)
    with open(path) as f:
        return f.read()
