# In the Chain of Responsibility pattern, a chain of handler objects is used to process a request.
# Each handler in the chain either processes the request or passes it along to the next handler in the chain.

# In this example, we have three types of loggers: ConsoleLogger, FileLogger, and ErrorLogger. Each logger inherits from the AbstractLogger class and implements the write_message method to handle log messages at different levels. The loggers are linked together in a chain using the set_next_logger method.
# The create_logger_chain function sets up the chain of loggers with their appropriate levels and then returns the head of the chain (console_logger in this case).
# When you run the code, you'll see that each logger in the chain handles messages based on their respective log levels. Messages with a level equal to or higher than the logger's level will be processed. The messages will be either printed to the console, written to a file, or handled as an error message, depending on the logger's type.

from abc import ABC, abstractmethod

class AbstractLogger(ABC):
    def __init__(self, level):
        self.level = level
        self.next_logger = None

    def set_next_logger(self, next_logger):
        self.next_logger = next_logger

    def log_message(self, level, message):
        if self.level <= level:
            self.write_message(message)
        if self.next_logger:
            self.next_logger.log_message(level, message)

    @abstractmethod
    def write_message(self, message):
        pass


class ConsoleLogger(AbstractLogger):
    def write_message(self, message):
        print(f"Console Logger: {message}")


class FileLogger(AbstractLogger):
    def __init__(self, level, filename):
        super().__init__(level)
        self.filename = filename

    def write_message(self, message):
        with open(self.filename, "a") as file:
            file.write(f"File Logger: {message}\n")


class ErrorLogger(AbstractLogger):
    def write_message(self, message):
        print(f"Error Logger: {message}")


def create_logger_chain():
    console_logger = ConsoleLogger(AbstractLogger.INFO)
    file_logger = FileLogger(AbstractLogger.DEBUG, "debug.log")
    error_logger = ErrorLogger(AbstractLogger.ERROR)

    console_logger.set_next_logger(file_logger)
    file_logger.set_next_logger(error_logger)

    return console_logger


class LogLevel:
    INFO = 1
    DEBUG = 2
    ERROR = 3


if __name__ == "__main__":
    logger_chain = create_logger_chain()

    logger_chain.log_message(LogLevel.INFO, "This is an informational message.")
    logger_chain.log_message(LogLevel.DEBUG, "This is a debug message.")
    logger_chain.log_message(LogLevel.ERROR, "This is an error message.")
