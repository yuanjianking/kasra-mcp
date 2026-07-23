# SEC-17: CSRF Protection Missing
# Test: TC-CR-024
from flask import Flask, request

app = Flask(__name__)

@app.route('/transfer', methods=['POST'])
def transfer():
    amount = request.form['amount']
    to_account = request.form['to']
    # No CSRF token validation
    make_transfer(amount, to_account)
    return 'OK'
