// Define the base logger interface
interface Logger {
  setNext(logger: Logger): void;
  log(message: string): void;
}

// Concrete logger class for logging messages to the console
class ConsoleLogger implements Logger {
  private nextLogger: Logger | null = null;

  setNext(logger: Logger): void {
    this.nextLogger = logger;
  }

  log(message: string): void {
    console.log(`Console Logger: ${message}`);
    if (this.nextLogger) {
      this.nextLogger.log(message);
    }
  }
}

// Concrete logger class for logging messages to a file
class FileLogger implements Logger {
  private nextLogger: Logger | null = null;

  setNext(logger: Logger): void {
    this.nextLogger = logger;
  }

  log(message: string): void {
    console.log(`File Logger: ${message}`);
    if (this.nextLogger) {
      this.nextLogger.log(message);
    }
  }
}

// Concrete logger class for logging messages to a database
class DatabaseLogger implements Logger {
  private nextLogger: Logger | null = null;

  setNext(logger: Logger): void {
    this.nextLogger = logger;
  }

  log(message: string): void {
    console.log(`Database Logger: ${message}`);
    if (this.nextLogger) {
      this.nextLogger.log(message);
    }
  }
}

// Usage example
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();
const databaseLogger = new DatabaseLogger();

consoleLogger.setNext(fileLogger);
fileLogger.setNext(databaseLogger);

consoleLogger.log("This is a log message.");
