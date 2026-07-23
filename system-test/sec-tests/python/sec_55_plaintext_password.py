# SEC-55: Sensitive Data Plaintext Storage
# Test: TC-CR-058
import sqlite3

def register_user(username, password):
    conn = sqlite3.connect('app.db')
    conn.execute("INSERT INTO users (username, password) VALUES (?, ?)",
                 (username, password))
    conn.commit()
