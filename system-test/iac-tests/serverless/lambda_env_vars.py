# IAC-17: Serverless Function Security — env var secrets
# Test: TC-IAC-019
import os

# Environment variables containing secrets
os.environ["DB_PASSWORD"] = "super_secret_password"
os.environ["API_KEY"] = "sk-test-abcdef123456"

def handler(event, context):
    password = os.environ.get("DB_PASSWORD")
    return {"statusCode": 200}
