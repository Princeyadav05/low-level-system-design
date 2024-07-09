# This code demonstrates the Command pattern in Python.
# It defines a Light class (receiver), concrete command classes (TurnOnCommand, TurnOffCommand),
# and a RemoteControl class (invoker) that uses commands to control the light.

from abc import ABC, abstractmethod

class Light:
    def turn_on(self):
        print("Light is on")

    def turn_off(self):
        print("Light is off")

class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

class TurnOnCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_on()

class TurnOffCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_off()

class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command):
        self.command = command

    def press_button(self):
        self.command.execute()

# Usage
light = Light()
turn_on = TurnOnCommand(light)
turn_off = TurnOffCommand(light)
remote = RemoteControl()

remote.set_command(turn_on)
remote.press_button()  # Output: Light is on

remote.set_command(turn_off)
remote.press_button()  # Output: Light is off