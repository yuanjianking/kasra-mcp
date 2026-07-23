# SEC-42: Plaintext Communication
# Test: TC-CR-047
import requests

def get_data():
    url = "http://api.internal.com/data"
    return requests.get(url).json()
