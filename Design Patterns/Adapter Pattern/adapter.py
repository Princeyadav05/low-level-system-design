# This code demonstrates the Adapter pattern:
# 1. We have an old printer interface (OldPrinter) and a new printer interface (NewPrinter).
# 2. We create an adapter (PrinterAdapter) that implements the new interface.
# 3. The adapter internally uses an instance of the old printer.
# 4. This allows us to use the old printer through the new interface.

from abc import ABC, abstractmethod

# Existing interface
class OldPrinter(ABC):
    @abstractmethod
    def print(self, s: str) -> None:
        pass

# New interface
class NewPrinter(ABC):
    @abstractmethod
    def print_document(self, s: str) -> None:
        pass

# Existing class
class OldPrinterImpl(OldPrinter):
    def print(self, s: str) -> None:
        print(f"Old Printer: {s}")

# Adapter class
class PrinterAdapter(NewPrinter):
    def __init__(self, old_printer: OldPrinter):
        self.old_printer = old_printer

    def print_document(self, s: str) -> None:
        self.old_printer.print(s)

# Client code
if __name__ == "__main__":
    old_printer = OldPrinterImpl()
    new_printer = PrinterAdapter(old_printer)

    new_printer.print_document("Hello, Adapter!")