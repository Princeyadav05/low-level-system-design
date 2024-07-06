# Adapter Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Adapter%20Pattern/adapter.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Adapter%20Pattern/adapter.ts)

## 1. What is it and what type of design pattern is it?

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a wrapper between two objects, catching calls for one object and transforming them to format and interface recognizable by the second object.

## 2. When to use it?

- When you want to use an existing class, but its interface isn't compatible with the rest of your code.
- When you want to reuse several existing subclasses that lack some common functionality that can't be added to the superclass.
- When you need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one.

## 3. Advantages and Disadvantages

### Advantages:
- Increases reusability of existing code
- Improves readability by separating interface or data conversion code from business logic
- Follows Single Responsibility Principle as it separates the interface conversion code from the primary business logic
- Follows Open/Closed Principle as we can introduce new adapters without breaking existing code

### Disadvantages:
- Increases overall code complexity by adding new interfaces and classes
- Sometimes it's simpler to change the service class to match the rest of your code
- Can be confusing to maintain if overused

## 4. Small Interview Explanation

The Adapter design pattern is like a power adapter you might use when traveling. If you have a device with a plug that doesn't fit the local power outlets, you use an adapter to make it work. In software, the Adapter pattern allows incompatible interfaces to work together. It converts the interface of a class into another interface that clients expect.

This pattern is particularly useful when integrating new systems with legacy code, or when working with third-party libraries that you can't modify. It allows you to make incompatible interfaces work together without changing their source code.