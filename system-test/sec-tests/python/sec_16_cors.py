# SEC-16: CORS Misconfiguration — permissive with credentials
# Test: TC-CR-023
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)
