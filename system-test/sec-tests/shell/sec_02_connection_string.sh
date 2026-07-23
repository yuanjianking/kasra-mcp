#!/bin/bash
# SEC-02: Hardcoded Connection Strings in scripts
# Test: TC-CR-005

DB_URL="postgresql://admin:MyPassw0rd!@prod-db.example.com:5432/mydb"
MONGO_URI="mongodb://root:secret123@mongo.internal:27017/admin"
export DATABASE_URL="$DB_URL"
