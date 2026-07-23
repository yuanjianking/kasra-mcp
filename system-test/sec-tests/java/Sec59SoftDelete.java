// SEC-59: Incomplete Data Deletion / Residual Data
// Test: TC-CR-062
package com.example;

import javax.persistence.*;

@Entity
public class User {
    @Id private Long id;
    private String username;
    private boolean isDeleted = false;  // Soft delete without cascading

    public void softDelete() {
        this.isDeleted = true;
        // Associated orders, comments, audit records NOT cleaned up
    }
}
