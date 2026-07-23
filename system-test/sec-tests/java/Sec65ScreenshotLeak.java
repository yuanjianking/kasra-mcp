// SEC-65: Screenshot Leak — missing FLAG_SECURE on sensitive activity
// Test: TC-CR-068
package com.example;

import android.app.Activity;
import android.os.Bundle;

public class PaymentActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Missing: getWindow().setFlags(FLAG_SECURE, FLAG_SECURE);
        // This activity shows credit card info and payment details
        // but does NOT prevent screenshots / screen recording
        setContentView(R.layout.activity_payment);

        showCreditCardNumber("4111-1111-1111-1111");
        showCVV("123");
    }

    private void showCreditCardNumber(String cardNumber) {
        // Displaying sensitive payment data
    }

    private void showCVV(String cvv) {
        // Displaying CVV code
    }
}
