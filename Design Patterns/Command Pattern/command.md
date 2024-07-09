# Command Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Command%20Pattern/command.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Command%20Pattern/command.ts)

## 1. What is it and what type of design pattern is it?

The Command is a behavioral design pattern that turns a request into a stand-alone object containing all information about the request. 

This transformation allows you to parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

## 2. When to use it?

- When you want to parameterize objects with operations
- When you need to queue operations, schedule their execution, or execute them remotely
- When you want to implement reversible operations
- When you need to structure a system around high-level operations built on primitive operations

## 3. Advantages and Disadvantages

### Advantages:
- Decouples the object that invokes the operation from the object that performs it
- Allows you to create a sequence of commands by adding them to a queue
- Extends the system to include new commands easily without changing existing code
- Supports undo/redo operations

### Disadvantages:
- Can lead to a large number of small classes that only do one specific thing
- Might be overkill for simple applications with straightforward command structures

## 4. Small Interview Explanation

"The Command pattern is like a restaurant order system. Instead of a customer (client) directly telling the chef (receiver) what to cook, they give their order to a waiter (command). The waiter takes the order to the kitchen where the chef prepares it.

In programming terms, this means we create command objects that encapsulate an action and its parameters. The command object knows about a receiver object and invokes a method of the receiver. A invoker object knows how to execute a command but doesn't know anything about the command's implementation.

This separation allows us to:
1. Parameterize objects with different requests or commands
2. Queue commands for later execution
3. Support undo operations easily

For example, in a text editor, instead of directly performing actions like 'copy' or 'paste', we create Command objects for these actions. This allows us to easily implement features like undo/redo, macro recording, or even remote execution of commands."