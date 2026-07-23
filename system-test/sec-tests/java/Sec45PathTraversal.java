// SEC-45: Path Traversal
// Test: TC-CR-049
package com.example;

import java.nio.file.*;

public class FileDownloadService {

    public Path getFilePath(String fileName) {
        return Paths.get("/var/data/", fileName);  // User input not sanitized
    }
}
