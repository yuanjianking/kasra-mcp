// SEC-07: OS Command Injection
// Test: TC-CR-013
package com.example;

public class CommandUtil {
    public void ping(String hostname) throws Exception {
        Runtime.getRuntime().exec("ping -c 1 " + hostname);
    }
}
