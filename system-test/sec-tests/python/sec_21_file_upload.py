# SEC-21: Unrestricted File Upload
# Test: TC-CR-028
from flask import Flask, request

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    file.save('/uploads/' + file.filename)
    return 'uploaded'
