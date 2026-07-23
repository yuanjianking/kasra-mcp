# SEC-34: TLS/SSL Certificate Validation Disabled
# Test: TC-CR-039
import ssl
import urllib.request

ssl._create_default_https_context = ssl._create_unverified_context
response = urllib.request.urlopen('https://example.com')
