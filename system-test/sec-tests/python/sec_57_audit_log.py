# SEC-57: Audit Log Missing
# Test: TC-CR-060
import sqlite3

def delete_user(user_id):
    conn = sqlite3.connect('app.db')
    conn.execute("DELETE FROM users WHERE id = ?", (user_id,))
    conn.commit()
    # No audit log of who deleted this user or when
