// SEC-52: Log Injection
// Test: TC-CR-056
const winston = require('winston');
const logger = winston.createLogger();

function processInput(userInput) {
  logger.info(`User input: ${userInput}`);  // Unsanitized input in logs
}
