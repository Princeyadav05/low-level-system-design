# In-Memory Distributed Queue System
Command line based TypeScript implementation of an in-memory distributed queue system similar to Kafka.

**Code Link**: [TypeScript](main.ts)

## How to Use

Install dependencies and Run the application: ```npm install && ts-node main.ts```

When publishing a message, you'll be prompted to enter:
- Producer ID (producer1 or producer2)
- Topic name (topic1 or topic2)
- Message content

## Low-Level Concepts Used

1. **Observer Pattern**: Used for the topic-consumer relationship, allowing efficient message distribution.

2. **Factory Pattern**: The QueueSystem class acts as a factory for creating topics, producers, and consumers.

3. **Single Responsibility Principle**: Each class has a well-defined responsibility (e.g., Topic manages messages, Consumer handles message reception).

4. **Encapsulation**: Classes like Topic and Consumer encapsulate their data and provide methods to interact with it.

5. **Publish-Subscribe Model**: The core functionality is based on the publish-subscribe messaging pattern.

## Code Structure

* `main.ts`: Entry point of the application, handles the command loop.
* `queueSystem.ts`: Implements the core queue system functionality, managing topics, producers, and consumers.
* `topic.ts`: Defines the Topic class for managing messages and subscribed consumers.
* `consumer.ts`: Implements the Consumer class for receiving and processing messages.
* `producer.ts`: Defines the Producer class for publishing messages to topics.
* `message.ts`: Implements the Message class representing individual messages in the system.

## Dual Subscription

The system implements a dual subscription mechanism:

1. Consumer subscribes to Topic (`consumer.subscribe(topicName)`):
- Allows the Consumer to keep track of which topics it's interested in.
- Enables the Consumer to filter incoming messages based on topic.

2. Topic subscribes to Consumer (`topic.subscribe(consumer)`):
- Allows the Topic to maintain a list of Consumers to notify when new messages arrive.
- Enables efficient message distribution without checking each Consumer's interests.

This dual approach provides several benefits:
- Separation of concerns
- Efficiency in message distribution
- Flexibility for future extensions (e.g., temporary subscription pausing)
- Loose coupling between Topics and Consumers

## Making it Multithreading Safe

To make this system multithreading safe, several modifications could be implemented:

1. **Use of Mutex**: Implement mutex locking for critical sections in the Topic and QueueSystem classes to ensure thread-safe operations on shared data structures.

2. **Concurrent Collections**: Replace standard collections (e.g., Array, Set) with thread-safe alternatives like ConcurrentHashMap or synchronized collections.

3. **Atomic Operations**: Use atomic operations for incrementing counters or updating shared state.

4. **Producer-Consumer Pattern**: Implement a producer-consumer pattern with a thread-safe queue for message passing between threads.

5. **Read-Write Locks**: Implement read-write locks to allow multiple simultaneous reads but exclusive writes on shared resources.

6. **Immutable Messages**: Make the Message class immutable to prevent race conditions during message processing.

7. **Thread Pool**: Implement a thread pool for managing concurrent message processing tasks.