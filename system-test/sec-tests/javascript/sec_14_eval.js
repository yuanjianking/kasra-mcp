// SEC-14: Code Injection via eval
// Test: TC-CR-020
function calculate(expression) {
  return eval(expression);
}
