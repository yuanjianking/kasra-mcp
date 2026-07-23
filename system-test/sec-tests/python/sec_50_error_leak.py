# SEC-50: Error Handling Information Leak
# Test: TC-CR-054
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    try:
        result = query_database()
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Leaks internal details
