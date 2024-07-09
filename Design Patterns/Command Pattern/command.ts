// This code shows the Command pattern in TypeScript.
// It defines a Light class (receiver), concrete command classes (TurnOnCommand, TurnOffCommand),
// and a RemoteControl class (invoker) that uses commands to control the light.

class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

interface Command {
  execute(): void;
}

class TurnOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
    } else {
      console.log("No command set");
    }
  }
}

// Usage
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);
const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // Output: Light is on

remote.setCommand(turnOff);
remote.pressButton(); // Output: Light is off
