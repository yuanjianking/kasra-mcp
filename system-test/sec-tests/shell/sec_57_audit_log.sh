#!/bin/bash
# SEC-57: Audit Log Missing — destructive operations without logging
# Test: TC-CR-060

# Delete user with no audit trail
userdel -r john

# Modify database directly
psql -c "DELETE FROM users WHERE id = 42"

# No logging of who did what or when
