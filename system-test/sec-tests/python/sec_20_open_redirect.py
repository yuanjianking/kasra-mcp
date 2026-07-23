# SEC-20: Open Redirect
# Test: TC-CR-027
from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/redirect')
def redir():
    target = request.args.get('next')
    return redirect(target)
