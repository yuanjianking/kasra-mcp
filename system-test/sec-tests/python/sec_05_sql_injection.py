# SEC-05: SQL Injection — string concatenation in SQL query
# Test: TC-CR-011
import sqlite3

def get_user(name):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE name = '" + name + "'"
    cursor.execute(query)
    return cursor.fetchall()
