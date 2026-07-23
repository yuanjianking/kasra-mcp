# SEC-24: Mass Assignment
# Test: TC-CR-030
from flask import Flask, request
from models import User, db

app = Flask(__name__)

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    # Attacker can set is_admin=true
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return 'created'
