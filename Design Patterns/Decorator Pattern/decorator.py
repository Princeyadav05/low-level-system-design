# This example demonstrates the Decorator design pattern using abstract classes in Python:

# Abstract class Coffee defines the interface with an abstract cost() method.
# Concrete class SimpleCoffee implements Coffee, providing a base coffee with a cost.
# Abstract class CoffeeDecorator extends Coffee and acts as the base for decorators, using composition with _coffee. Concrete decorators like MilkDecorator and SugarDecorator extend it, modifying the cost based on the wrapped coffee. The main section creates and decorates coffee objects, showcasing how decorations can be stacked.

from abc import ABC, abstractmethod

# Component interface
class Coffee(ABC):
    @abstractmethod
    def cost(self):
        pass

# ConcreteComponent
class SimpleCoffee(Coffee):
    def cost(self):
        return 5

# Decorator
class CoffeeDecorator(Coffee, ABC):
    def __init__(self, coffee):
        self._coffee = coffee

    @abstractmethod
    def cost(self):
        pass

# ConcreteDecorator
class MilkDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 2

# Another ConcreteDecorator
class SugarDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 1

if __name__ == "__main__":
    # Create a simple coffee
    simple_coffee = SimpleCoffee()
    print("Cost of simple coffee:", simple_coffee.cost())

    # Decorate the simple coffee with milk
    milk_coffee = MilkDecorator(simple_coffee)
    print("Cost of milk coffee:", milk_coffee.cost())

    # Decorate the milk coffee with sugar
    sugar_milk_coffee = SugarDecorator(milk_coffee)
    print("Cost of sugar milk coffee:", sugar_milk_coffee.cost())
