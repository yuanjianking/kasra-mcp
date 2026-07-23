# SEC-08: Unsafe Deserialization — pickle load
# Test: TC-CR-014
import pickle

def load_data(blob):
    return pickle.loads(blob)
