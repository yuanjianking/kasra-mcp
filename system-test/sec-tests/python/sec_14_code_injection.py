# SEC-14: Code Injection — eval with user input
# Test: TC-CR-020
def calc(expr):
    return eval(expr)
