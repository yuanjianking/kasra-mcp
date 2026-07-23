# SEC-53: Integer Overflow / Wrap-Around
# Test: TC-CR-057

def calculate_total(price, quantity):
    # No overflow check
    total = price * quantity
    return total
