// SEC-52: Log Injection
// Test: TC-CR-056
import { createLogger } from 'winson';
const logger = createLogger();

function processInput(userInput: string): void {
  logger.info(`User input: ${userInput}`);  // Unsanitized in logs
}
