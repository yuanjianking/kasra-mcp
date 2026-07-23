# SEC-59: Incomplete Data Deletion / Residual Data
# Test: TC-CR-062
from models import User, db

def delete_user(user_id):
    user = User.query.get(user_id)
    user.is_deleted = True
    db.session.commit()
    # Associated orders, comments, logs not cleaned up
