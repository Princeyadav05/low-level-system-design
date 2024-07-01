abstract class Animal {
  abstract speak(): string;
}

class Dog extends Animal {
  speak(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak(): string {
    return "Meow!";
  }
}

class Duck extends Animal {
  speak(): string {
    return "Quack!";
  }
}

class AnimalFactory {
  createAnimal(animalType: string): Animal {
    if (animalType === "dog") {
      return new Dog();
    } else if (animalType === "cat") {
      return new Cat();
    } else if (animalType === "duck") {
      return new Duck();
    } else {
      throw new Error("Invalid animal type");
    }
  }
}

const animalFactory = new AnimalFactory();

const dog = animalFactory.createAnimal("dog");
console.log(dog.speak()); // Output: Woof!

const cat = animalFactory.createAnimal("cat");
console.log(cat.speak()); // Output: Meow!

const duck = animalFactory.createAnimal("duck");
console.log(duck.speak()); // Output: Quack!
