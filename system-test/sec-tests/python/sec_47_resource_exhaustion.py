# SEC-47: Resource Exhaustion / DoS
# Test: TC-CR-051
import queue

def process_forever():
    q = queue.Queue()
    while True:
        item = q.get()
        process_item(item)  # No timeout, no rate limit
