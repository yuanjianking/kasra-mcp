# SEC-58: Brute Force Protection Missing
# Test: TC-CR-061
from flask import Flask, request

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    # No rate limiting, no account lockout
    if check_password(username, password):
        return 'login success'
    return 'login failed'
