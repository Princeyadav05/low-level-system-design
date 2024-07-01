# Abstract Factory  Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/AbstractFactory%20Pattern/abstractFactory.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/AbstractFactory%20Pattern/abstractFactory.ts)


### 1. What is it? And what type of design pattern it is.

The **Abstract Factory** is a **creational design pattern** that helps you create families of related objects without specifying their concrete classes. It's like a factory of factories – one main factory that creates sub-factories which then create specific objects.

### 2. When to use it?

Use the Abstract Factory pattern when:

- You need to create objects that are part of a family or group, like different GUI elements (buttons, checkboxes) for different operating systems.
- Your code needs to be independent of how objects are created, composed, and represented.
- You want to provide a way to create objects that are related or work together without worrying about their specific classes.

### 3. Advantages and Disadvantages.

**Advantages:**
- Helps ensure that your code follows the "open-closed principle," meaning you can add new families of objects without changing existing code.
- Promotes consistency by ensuring that objects are created in a coherent way within their families.
- Encourages separation of concerns by isolating object creation in factories.

**Disadvantages:**
- Can add complexity by introducing multiple layers of abstraction.
- Might lead to a high number of classes if the number of product families grows.
- Not ideal if the product families need frequent extensions, as you'd need to modify multiple factory classes.

### 4. Small Interview Explanation

Imagine you're designing a game with different characters and weapons. The characters can be heroes or villains, and each hero or villain has a specific weapon. The **Abstract Factory** pattern helps you create families of characters and weapons without worrying about their exact types. You define factories for heroes and villains, and each factory creates a hero with the right weapon or a villain with the right weapon.

### 5. Difference between Factory Design Pattern and Abstract Factory Design Pattern

The **Factory Design Pattern** is about creating individual objects of a single type without specifying the exact class. It's like having a factory that produces a specific product.

The **Abstract Factory Design Pattern** goes a step further. It's about creating families of related objects, each with multiple variations. It's like having a factory that produces factories, and each factory then produces different related products. This is useful when you need to create complex systems where different objects need to work together in a coordinated way.

In short, the Factory pattern focuses on creating single objects, while the Abstract Factory pattern handles families of related objects.

Remember, design patterns are tools that help you structure your code in a more organized and maintainable way. They provide proven solutions to common programming problems.