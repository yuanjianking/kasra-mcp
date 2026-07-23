# SEC-43: Observability Data Leak
# Test: TC-CR-047-B
import os
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/actuator')
def actuator():
    # Exposes all internal endpoints including env vars
    return jsonify(health=check_health(), env=dict(os.environ))
