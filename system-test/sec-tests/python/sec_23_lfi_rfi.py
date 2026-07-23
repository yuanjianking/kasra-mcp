# SEC-23: Local/Remote File Inclusion
# Test: TC-CR-021
def load_page(page):
    with open(f"/var/www/{page}", "r") as f:
        return f.read()
