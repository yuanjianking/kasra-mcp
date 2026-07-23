// SEC-47: Resource Exhaustion / DoS
// Test: TC-CR-051
function processQueue(queue: string[]): void {
  while (true) {
    const item = queue.shift();
    if (item) processItem(item);  // No limits
  }
}
