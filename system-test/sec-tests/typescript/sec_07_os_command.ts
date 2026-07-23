// SEC-07: OS Command Injection
// Test: TC-CR-013
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function pingHost(hostname: string) {
  const { stdout } = await execAsync(`ping -c 1 ${hostname}`);
  return stdout;
}
