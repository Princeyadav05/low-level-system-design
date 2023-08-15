# Factory Design Pattern

[Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Factory%20Pattern/factory.py)
Sure, I'd be happy to explain the Factory Design Pattern in a simple manner using markdown:



### 1. What is it? And what type of design pattern is it?
The Factory Design Pattern is a **creational design pattern** that helps us create objects in a more organized way. Imagine you're running a toy factory – instead of making each toy by hand, you create a machine (the factory) that produces toys according to a specific plan. Similarly, the Factory Design Pattern provides a way to create objects without directly specifying their classes.

### 2. When to use it?
Use the Factory Design Pattern when:

- You want to create objects without knowing their specific classes in advance.
- You need to centralize object creation to make your code more maintainable.
- Your code should be open for adding new types of objects, but closed for modifying existing code (this relates to the "Open/Closed Principle").

### 3. Advantages and Disadvantages
**Advantages**:
- **Decoupling**: It separates the code that creates objects from the code that uses them.
- **Flexibility**: You can add new types of objects without changing existing code.
- **Code Organization**: It keeps object creation logic in one place, making your codebase cleaner.

**Disadvantages**:
- **Complexity**: Introducing a factory can add some complexity to the code.
- **Overhead**: In simple cases, a factory might be overkill and add unnecessary overhead.
- **Abstraction**: It might require creating extra classes for the factory and the products, which can be a bit abstract for small projects.

### 4. Small Interview Explanation
Imagine you're building a game. You need to create different characters like knights, wizards, and archers. Instead of directly making these characters in your game code, you create a Character Factory. This factory takes the type of character you want and returns the specific character object you need. This way, if you later decide to add a new character type, you just update the factory, and the rest of your game doesn't need to change.

In simpler words, the Factory Design Pattern is like a magical machine that makes the right toys for your game, without you needing to know exactly how each toy is made.

### 5. Difference between Factory Design Pattern and Abstract Factory Design Pattern

The **Factory Design Pattern** is about creating individual objects of a single type without specifying the exact class. It's like having a factory that produces a specific product.

The **Abstract Factory Design Pattern** goes a step further. It's about creating families of related objects, each with multiple variations. It's like having a factory that produces factories, and each factory then produces different related products. This is useful when you need to create complex systems where different objects need to work together in a coordinated way.

In short, the Factory pattern focuses on creating single objects, while the Abstract Factory pattern handles families of related objects.

Remember, design patterns are tools that help you structure your code in a more organized and maintainable way. They provide proven solutions to common programming problems.
