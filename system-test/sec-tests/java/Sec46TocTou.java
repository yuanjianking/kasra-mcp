// SEC-46: Race Condition / TOCTOU
// Test: TC-CR-050
package com.example;

import java.nio.file.*;

public class FileDeleteService {

    public void deleteFile(String path) throws Exception {
        Path filePath = Paths.get(path);
        if (Files.exists(filePath)) {
            // Race window: attacker can swap file between check and delete
            Files.delete(filePath);
        }
    }
}
