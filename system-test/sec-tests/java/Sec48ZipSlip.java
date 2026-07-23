// SEC-48: Zip Slip / Archive Extraction
// Test: TC-CR-052
package com.example;

import java.io.*;
import java.util.zip.*;

public class ZipService {

    public void extractZip(InputStream inputStream) throws Exception {
        ZipInputStream zis = new ZipInputStream(inputStream);
        ZipEntry entry;
        while ((entry = zis.getNextEntry()) != null) {
            // No path traversal check — allows ../ in entry names
            File outputFile = new File("/tmp/extract/" + entry.getName());
            if (!entry.isDirectory()) {
                try (FileOutputStream fos = new FileOutputStream(outputFile)) {
                    byte[] buffer = new byte[1024];
                    int len;
                    while ((len = zis.read(buffer)) > 0) {
                        fos.write(buffer, 0, len);
                    }
                }
            }
        }
    }
}
