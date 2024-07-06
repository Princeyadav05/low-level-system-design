// This code demonstrates the Adapter pattern:
// 1. We have an old printer interface (OldPrinter) and a new printer interface (NewPrinter).
// 2. We create an adapter (PrinterAdapter) that implements the new interface.
// 3. The adapter internally uses an instance of the old printer.
// 4. This allows us to use the old printer through the new interface.

// Old interface
interface OldPrinter {
    print(s: string): void;
}

// New interface
interface NewPrinter {
    printDocument(s: string): void;
}

// Old class
class OldPrinterImpl implements OldPrinter {
    print(s: string): void {
        console.log(`Old Printer: ${s}`);
    }
}

// New Adapter class
class PrinterAdapter implements NewPrinter {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    printDocument(s: string): void {
        this.oldPrinter.print(s);
    }
}

// Client code
const oldPrinter = new OldPrinterImpl();
const newPrinter: NewPrinter = new PrinterAdapter(oldPrinter);

newPrinter.printDocument("Hello, Adapter!");