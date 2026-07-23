// SEC-53: Integer Overflow / Wrap-Around
// Test: TC-CR-057
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
