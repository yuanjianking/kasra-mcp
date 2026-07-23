# SEC-48: Zip Slip / Archive Extraction
# Test: TC-CR-052
import zipfile

def extract_archive(uploaded_zip):
    with zipfile.ZipFile(uploaded_zip) as zf:
        zf.extractall('/tmp/extract/')
