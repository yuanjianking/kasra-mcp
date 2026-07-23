// SEC-53: Integer Overflow / Wrap-Around
// Test: TC-CR-057
package com.example;

public class PaymentService {

    public long calculateTotal(long price, int quantity) {
        return price * quantity;  // Potential overflow if large values
    }

    public int transfer(int balance, int amount) {
        return balance - amount;  // Potential underflow
    }
}
