# This code implements the Singleton pattern in Python.
# It ensures that only one instance of the Singleton class is created and used throughout the program.

class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

    def some_method(self):
        print("Method of the singleton")

# Usage
instance1 = Singleton()
instance2 = Singleton()

print(instance1 is instance2)  # Output: True

instance1.some_method()  # Output: Method of the singleton