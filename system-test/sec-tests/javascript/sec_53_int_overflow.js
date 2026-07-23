// SEC-53: Integer Overflow / Wrap-Around
// Test: TC-CR-057
function calculateTotal(price, quantity) {
  return price * quantity;  // Potential overflow with large values
}

function transfer(balance, amount) {
  return balance - amount;  // Potential underflow
}
