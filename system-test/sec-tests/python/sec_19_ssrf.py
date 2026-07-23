# SEC-19: SSRF — Server-Side Request Forgery
# Test: TC-CR-026
import requests
from flask import Flask, request

app = Flask(__name__)

@app.route('/fetch')
def fetch_url():
    url = request.args.get('url')
    response = requests.get(url)
    return response.content
