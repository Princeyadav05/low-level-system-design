# Decorator Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Decorator%20Pattern/decorator.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Decorator%20Pattern/decorator.ts)

### 1. What is it? What type of design pattern?

The **Decorator design pattern** is a structural pattern in software design. It allows you to add new behaviors or responsibilities to objects dynamically without changing their code. This pattern is all about wrapping objects to alter their functionality.

### 2. When to use it?

Use the Decorator pattern when you want to:

- **Add features incrementally:** Instead of creating multiple subclasses for every feature combination, decorators let you add new features step by step.
- **Avoid class explosion:** This pattern helps prevent having a huge number of classes by using composition for adding features.
- **Modify existing objects:** If you need to change the behavior of an object but don't want to change its class, decorators are a good choice.

### 3. Advantages and Disadvantages

#### Advantages:
- **Flexibility:** Decorators allow you to mix and match features dynamically, creating flexible and reusable combinations.
- **Open/Closed Principle:** You can extend functionality without modifying existing code, promoting the open/closed principle.
- **Single Responsibility:** Each decorator adds a specific responsibility, keeping classes focused.

#### Disadvantages:
- **Complexity:** Overusing decorators might lead to a complex web of objects and decorators.
- **Order Matters:** The order of decorating matters, as decorators stack on top of each other.
- **Learning Curve:** Understanding the pattern's structure can be challenging for beginners.

### 4. Interview Explanation
- Imagine you run a coffee shop app. The Decorator pattern is like customizing your coffee. 
- If you have a basic coffee (component), you can add milk (decorator), sugar (decorator), or more, each adjusting the price. 
- It's like a build-a-coffee system, where you can mix flavors without changing the core coffee class. 
- This makes your app flexible and allows customers to personalize their drinks easily.
