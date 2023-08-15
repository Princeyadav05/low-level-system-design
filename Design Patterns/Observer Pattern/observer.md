# Observer Design Pattern

[Code](https://github.com/Princeyadav05/low-level-system-design/blob/main/Design%20Patterns/Observer%20Pattern/observer.py)

### 1. What is the Observer Design Pattern?

The Observer design pattern is a way to make objects listen for and react to changes in other objects. It's like having a "news subscription" where you get updates whenever something you're interested in changes. In this pattern, there are two main parts: **observers** who want to know about changes, and **observables** (or subjects) that notify the observers when changes happen.

It is again a behavioral design pattern.

### 2. When to Use the Observer Pattern?

You should use the Observer pattern when you have objects that need to stay updated about changes in another object without knowing the details of how those updates happen. If you've ever used social media and you follow someone to get their updates, you've experienced something like the Observer pattern!

Examples where you might use the Observer pattern:
- In a weather app, where multiple displays need to show temperature updates as soon as they change.
- In a game, when you want multiple characters to react to a boss monster's actions.
- In a stock market app, where investors need real-time updates about the prices of their chosen stocks.

### 3. Advantages and Disadvantages:

**Advantages:**
- **Flexibility**: Observers can be added or removed without changing the observable. You can easily customize what objects get notified.
- **Decoupling**: Observers and observables are not tightly connected. They can work independently without knowing much about each other.
- **Scalability**: It's easy to add new observers without changing the existing code.

**Disadvantages:**
- **Complexity**: The pattern might add some complexity to your code, especially if there are many observers and observables.
- **Unexpected Updates**: Observers might get updates they don't need, especially if the observable sends out frequent updates.

### 4. Interview Explanation:

In an interview, you could explain the Observer pattern like this:

"Imagine you have a news website where people can subscribe to receive updates about news articles. The Observer design pattern is like this situation. The news website is the 'subject,' and people who subscribe are the 'observers.' When a new article is published (when the subject changes), the website automatically sends notifications to all subscribers (observers) so they can read the new article. This way, the subscribers are always up to date without the website needing to individually inform each person."

Remember, the key points are:

There's a subject (source of information) and observers (listeners).
Observers want to know when the subject changes.
It helps to avoid strong connections between components.
Advantages include flexibility and reusability, while disadvantages include complexity and managing update order.