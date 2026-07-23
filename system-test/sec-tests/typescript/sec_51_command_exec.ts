// SEC-51: Unsafe Direct Command Execution
// Test: TC-CR-055
import { execSync } from 'child_process';

function run(cmd: string): string {
  return execSync(`sh -c '${cmd}'`, { encoding: 'utf8' });
}
