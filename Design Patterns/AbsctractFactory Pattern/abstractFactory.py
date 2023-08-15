
# In this example, the GUIFactory is an abstract factory that declares methods for creating button and checkbox products.
# There are two concrete factories: WindowsFactory and MacOSFactory, each of which provides implementations for creating their respective button and checkbox products.

# The abstract product classes Button and Checkbox define the methods that the concrete products (WindowsButton, MacOSButton, WindowsCheckbox, MacOSCheckbox) must implement.
# The application function demonstrates how the client code can use the abstract factory to create GUI elements specific to the chosen operating system.
# The client code takes user input to determine the desired operating system type and then creates the appropriate factory to produce the corresponding GUI elements.


# Abstract Factory
class GUIFactory:
    def create_button(self):
        pass

    def create_checkbox(self):
        pass

# Concrete Factory for Windows
class WindowsFactory(GUIFactory):
    def create_button(self):
        return WindowsButton()

    def create_checkbox(self):
        return WindowsCheckbox()

# Concrete Factory for macOS
class MacOSFactory(GUIFactory):
    def create_button(self):
        return MacOSButton()

    def create_checkbox(self):
        return MacOSCheckbox()

# Abstract Product: Button
class Button:
    def paint(self):
        pass

# Concrete Product: Windows Button
class WindowsButton(Button):
    def paint(self):
        return "Render a Windows button"

# Concrete Product: macOS Button
class MacOSButton(Button):
    def paint(self):
        return "Render a macOS button"

# Abstract Product: Checkbox
class Checkbox:
    def paint(self):
        pass

# Concrete Product: Windows Checkbox
class WindowsCheckbox(Checkbox):
    def paint(self):
        return "Render a Windows checkbox"

# Concrete Product: macOS Checkbox
class MacOSCheckbox(Checkbox):
    def paint(self):
        return "Render a macOS checkbox"

def application(factory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()

    print(button.paint())
    print(checkbox.paint())

# Client code
if __name__ == "__main__":
    os_type = input("Enter the OS type (windows/mac): ")

    if os_type.lower() == "windows":
        factory = WindowsFactory()
    elif os_type.lower() == "mac":
        factory = MacOSFactory()
    else:
        raise ValueError("Invalid OS type")

    application(factory)
