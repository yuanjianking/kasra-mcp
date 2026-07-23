# SEC-18: Authentication Missing
# Test: TC-CR-025
from flask import Flask

app = Flask(__name__)

@app.route('/admin/users')
def list_users():
    # No authentication decorator
    return "All users data"
