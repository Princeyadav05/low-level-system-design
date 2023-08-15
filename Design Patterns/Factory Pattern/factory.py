# In this example, we have an Animal superclass and three subclasses Dog, Cat, and Duck, each representing different types of animals. The AnimalFactory class is responsible for creating instances of these animal types based on the input provided.
# The factory's create_animal method takes an argument representing the desired animal type and returns an instance of the corresponding class. This way, the client code doesn't need to know the specifics of object creation, and the factory handles the creation logic.


from abc import ABC, abstractmethod

# Abstract animal class
class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

# Concrete animal class
class Dog(Animal):
    def speak(self):
        return "Woof!"

# Concrete animal class
class Cat(Animal):
    def speak(self):
        return "Meow!"

# Concrete animal class
class Duck(Animal):
    def speak(self):
        return "Quack!"

# Concrete Factory
class AnimalFactory:
    def create_animal(self, animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        elif animal_type == "duck":
            return Duck()
        else:
            raise ValueError("Invalid animal type")

# Client code
if __name__ == "__main__":
    animal_factory = AnimalFactory()

    dog = animal_factory.create_animal("dog")
    print(dog.speak())  # Output: Woof!

    cat = animal_factory.create_animal("cat")
    print(cat.speak())  # Output: Meow!

    duck = animal_factory.create_animal("duck")
    print(duck.speak())  # Output: Quack!
