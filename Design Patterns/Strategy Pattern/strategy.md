# Strategy Design Pattern

[Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Strategy%20Pattern/strategy.py)

### 1. What is the Strategy Design Pattern?

**Definition**: The Strategy Design Pattern is a way to organize your code by defining a family of interchangeable algorithms or behaviors and making them easily switchable.

**Explanation**: Imagine you have different ways to do a task, like paying for items. Instead of coding all the payment methods directly into the main part of your program, the Strategy Pattern lets you encapsulate each payment method as a separate "strategy." This way, you can easily switch between payment methods without changing the main code.

### 2. When to Use the Strategy Design Pattern?

**Use Case**: You should use the Strategy Pattern when you want to provide different ways of doing something and want to be able to switch between these ways at runtime.

**Example**: If you're making an online store and you want to handle payments, you might have different payment methods like credit card, PayPal, and Bitcoin. Instead of having one huge chunk of code for all these methods, you use the Strategy Pattern to keep them separate and easily interchangeable.

### 3. Advantages and Disadvantages:

**Advantages**:
- **Flexibility**: You can add new strategies (like new payment methods) without changing existing code.
- **Readability**: Code is more organized and easier to understand since each strategy is in its own place.
- **Testing**: You can test each strategy separately, making your code more reliable.

**Disadvantages**:
- **Complexity**: Sometimes, if you have just a few strategies, the added structure might make things more complex than needed.
- **Overhead**: There's a bit of extra setup since you need to define separate classes for each strategy.

### 4. Interview Explanation:

1. Strategy Pattern is a way to manage different ways of doing something in your code by creating separate strategies (algorithms or behaviors) and switching between them.
2. It's used when you want to provide various ways of doing a task and be able to change those ways easily.
3. The good parts are that it keeps code organized, lets you add new ways without messing up old code, and makes testing easier. But it can add a bit of complexity and some extra setup work.

Remember, the Strategy Pattern helps you design your code so that it's easier to change and maintain over time.