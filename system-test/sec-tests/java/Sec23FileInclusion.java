// SEC-23: Local File Inclusion
// Test: TC-CR-021
package com.example;

import java.nio.file.*;

public class FileService {
    public String readFile(String filePath) throws Exception {
        return new String(Files.readAllBytes(Paths.get(filePath)));
    }
}
