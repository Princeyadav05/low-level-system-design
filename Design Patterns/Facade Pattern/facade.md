# Facade Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Facade%20Pattern/facade.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Facade%20Pattern/facade.ts)

## 1. What is it and what type of design pattern is it?

The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. It acts as a high-level interface that makes the subsystem easier to use by hiding its complexities.

## 2. When to use it?

- When you need to provide a simple interface to a complex subsystem.
- When you want to layer your subsystems and use a facade as an entry point to each layer.
- When you want to reduce dependencies of outside code on the inner workings of a subsystem.

## 3. Advantages and Disadvantages

### Advantages:
- Simplifies the interface for clients
- Reduces coupling between subsystems and clients
- Promotes loose coupling
- Hides complexities of the subsystem

### Disadvantages:
- Can become a "god object" coupled to all classes of an app
- May introduce an additional layer, slightly impacting performance
- Might hide useful lower-level functionality from clients

## 4. Small Interview Explanation

The Facade design pattern is like a simplified interface to a complex system.  \
Imagine you're at a restaurant. You don't need to know how the kitchen works, how to cook the food, or how to manage inventory. \
You just look at the menu (the facade) and order your meal. The waiter (also part of the facade) takes care of the rest, hiding all the complexity behind the scenes.