// SEC-21: Unrestricted File Upload
// Test: TC-CR-028
package com.example;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.*;

@RestController
public class UploadController {

    @PostMapping("/upload")
    public String upload(MultipartFile file) throws Exception {
        String path = "/uploads/" + file.getOriginalFilename();
        file.transferTo(Paths.get(path));
        return "uploaded";
    }
}
