import readline from "readline";

// Abstract Factory
abstract class GUIFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): Checkbox;
}

// Concrete Factory for Windows
class WindowsFactory extends GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Concrete Factory for macOS
class MacOSFactory extends GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}


// Abstract Product: Button
abstract class Button {
  abstract paint(): string;
}

// Concrete Product: Windows Button
class WindowsButton extends Button {
  paint(): string {
    return "Render a Windows button";
  }
}

// Concrete Product: macOS Button
class MacOSButton extends Button {
  paint(): string {
    return "Render a macOS button";
  }
}

// Abstract Product: Checkbox
abstract class Checkbox {
  abstract paint(): string;
}

// Concrete Product: Windows Checkbox
class WindowsCheckbox extends Checkbox {
  paint(): string {
    return "Render a Windows checkbox";
  }
}

// Concrete Product: macOS Checkbox
class MacOSCheckbox extends Checkbox {
  paint(): string {
    return "Render a macOS checkbox";
  }
}

function application(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  console.log(button.paint());
  console.log(checkbox.paint());
}

// Client code

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the OS type (windows/mac): ", (osType) => {
  rl.close();

  if (osType?.toLowerCase() === "windows") {
    const factory = new WindowsFactory();
    application(factory);
  } else if (osType?.toLowerCase() === "mac") {
    const factory = new MacOSFactory();
    application(factory);
  } else {
    throw new Error("Invalid OS type");
  }
});
