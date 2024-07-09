# Iterator Design Pattern

[Python Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Iterator%20Pattern/iterator.py) \
[TS Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Iterator%20Pattern/iterator.ts)

## 1. What is it and what type of design pattern is it?

The Iterator is a behavioral design pattern that provides a way to access elements of a collection sequentially without exposing its underlying representation. It separates the traversal of a collection from the collection itself.

## 2. When to use it?

- When you want to access a collection's contents without exposing its internal structure.
- When you need to support multiple types of traversals for a collection.
- When you want to provide a uniform interface for traversing different types of collections.
- When you need to decouple algorithms from the collections they operate on.

## 3. Advantages and Disadvantages

### Advantages:
- Simplifies the interface of the collection
- Supports variations in traversal of a collection
- More than one traversal can be in progress on a collection

### Disadvantages:
- Can be overkill for simple collections
- Introducing new collection types might require many new iterator classes
- May not be as efficient as direct access to elements in some cases

## 4. Small Interview Explanation

The Iterator design pattern is a way to access elements of a collection (like an array or list) sequentially without exposing the underlying structure of the collection. 

It's like having a "tour guide" for your data that knows how to move through it step by step.