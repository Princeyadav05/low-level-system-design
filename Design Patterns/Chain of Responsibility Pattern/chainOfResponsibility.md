# Chain of Responsibility Design Pattern

[Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Strategy%20Pattern/strategy.py)

Examples: Logger Service, Vending Machine, ATM

### What is it?
The Chain of Responsibility is a behavioral design pattern that helps organize code by creating a chain of handler objects. Each handler can process a request or pass it to the next handler in the chain. It's like a relay race where each runner (handler) can decide to run or pass the baton (request) to the next runner.

### Type of Design Pattern
The Chain of Responsibility is a behavioral design pattern. It's part of a group of patterns that focus on how objects collaborate and communicate.

### When to Use It?
Use the Chain of Responsibility when you want to:
- Process a request through a series of steps without knowing exactly which step will handle it.
- Avoid coupling between the sender of a request and its receivers.
- Let multiple objects have a chance to handle a request.

### Advantages
- **Decoupling:** The pattern helps separate the sender and receiver of a request, reducing the dependencies between them.
- **Flexibility:** You can add or remove handlers from the chain without changing the client code.
- **Multiple Options:** Different handlers can provide various ways of processing a request.

### Disadvantages
- **Performance Impact:** If the chain is long or too many handlers are involved, it can slow down the processing.
- **Missed Requests:** If no handler in the chain can handle a request, it might go unprocessed.

### Small Interview Explanation
Imagine you're at a restaurant and you want to order food. You tell the waiter your order. Instead of the waiter bringing your order directly to the kitchen, the waiter passes it to the manager. If the manager can't handle it, they pass it to the chef. This continues until the request (your order) is handled by someone. This is like the Chain of Responsibility pattern, where different "handlers" can process a request, or pass it to the next "handler" in line. It's used when we want to avoid directly connecting who makes a request and who handles it, and it lets us build flexible and decoupled systems.

Remember, this pattern is like passing a message down a line of people. Each person can either deal with the message or pass it along to the next person. It's a neat way to organize how things get done!

