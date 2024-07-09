# Singleton Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Singleton%20Pattern/singleton.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Singleton%20Pattern/singleton.ts)

## What is it and what type of design pattern is it?
- The Singleton is a creational design pattern.
- It ensures a class has only one instance and provides a global point of access to it.
- It's used when exactly one object is needed to coordinate actions across the system.

## When to use it?
- When you need strict control over global variables.
- When a single instance should be used across the entire application.
- For shared resources like a database connection or a file manager.
- To coordinate actions across the system.

## Advantages and Disadvantages

### Advantages:
- Ensures a class has just a single instance.
- Provides a global access point to that instance.
- The singleton object is initialized only when it's requested for the first time.

### Disadvantages:
- Violates the Single Responsibility Principle (a class has more than one reason to change).
- Can mask bad design, for instance, when components know too much about each other.
- Requires special treatment in a multithreaded environment.
- Can make unit testing more difficult.

## Small Interview Explanation
The Singleton pattern is used when we want to ensure that a class has only one instance throughout the entire application. It provides a global point of access to this instance. 

For example, imagine we're building an application that needs to manage a shared resource, like a configuration manager. We don't want multiple instances of this manager as it could lead to inconsistencies. Instead, we use the Singleton pattern to ensure that only one instance exists and that all parts of our application use this same instance.
