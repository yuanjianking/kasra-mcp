// SEC-47: Resource Exhaustion / DoS
// Test: TC-CR-051
package com.example;

import java.util.concurrent.*;

public class ProcessingService {
    private final ExecutorService executor = Executors.newFixedThreadPool(100);
    private final BlockingQueue<String> queue = new LinkedBlockingQueue<>();

    public void processForever() {
        while (true) {
            String item = queue.poll();
            if (item != null) {
                executor.submit(() -> process(item));  // No rate limiting, unbounded threads
            }
        }
    }

    private void process(String item) {
        // Process item — potentially infinite
    }
}
