# SEC-22: IDOR — Insecure Direct Object Reference
# Test: TC-CR-029
from flask import Flask, request
from models import User

app = Flask(__name__)

@app.route('/api/user/<user_id>')
def get_user(user_id):
    # No ownership check — any user can access any user_id
    return User.query.get(user_id)
