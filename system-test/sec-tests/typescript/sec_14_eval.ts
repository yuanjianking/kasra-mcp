// SEC-14: Code Injection via eval
// Test: TC-CR-020
function calculate(expression: string): unknown {
  return eval(expression);
}

function createFunction(code: string): Function {
  return new Function(code);  // Also dangerous
}
