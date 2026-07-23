// SEC-51: Unsafe Direct Command Execution
// Test: TC-CR-055
package com.example;

public class ShellService {

    public String execute(String command) throws Exception {
        Process process = Runtime.getRuntime().exec(new String[]{"sh", "-c", command});
        return readOutput(process);
    }
}
