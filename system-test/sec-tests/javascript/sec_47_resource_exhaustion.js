// SEC-47: Resource Exhaustion / DoS
// Test: TC-CR-051
function processItems(queue) {
  while (true) {
    const item = queue.dequeue();
    if (item) {
      processItem(item);  // No limits, potentially infinite
    }
  }
}
