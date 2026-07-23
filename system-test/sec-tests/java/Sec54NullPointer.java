// SEC-54: Null Pointer Dereference
// Test: (complementary to CR)
package com.example;

import java.util.Optional;

public class UserProfileService {

    public String getDisplayName(Optional<String> name) {
        return name.orElse(null).toUpperCase();  // NPE if name is empty
    }
}
