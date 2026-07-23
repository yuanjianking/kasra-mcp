// SEC-14: Code Injection via Runtime.exec
// Test: TC-CR-020
package com.example;

public class ExecService {
    public void execute(String command) throws Exception {
        Runtime.getRuntime().exec(command);
    }
}
