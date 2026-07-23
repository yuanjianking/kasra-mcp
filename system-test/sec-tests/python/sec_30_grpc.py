# SEC-30: gRPC Security — insecure connection
# Test: TC-CR-036
import grpc

def connect():
    channel = grpc.insecure_channel('service:8080')
    return channel
