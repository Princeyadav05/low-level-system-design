# In-Memory Key-Value Store
Command line based TS implementation of a thread-safe, in-memory key-value store similar to Redis.

**Code Link**: [TypeScript](main.ts)

## How to Use

1. Install dependencies and Run the application: 
   ```
   npm install && ts-node main.ts
   ```
2. Use the following commands:
   ```
   put <key> <attributeKey1> <attributeValue1> <attributeKey2> <attributeValue2>...
   get <key>
   delete <key>
   search <attributeKey> <attributeValue>
   keys
   exit
   ```

## Low-Level Concepts Used

This in-memory key-value store implementation utilizes several low-level design patterns and concepts:

1. **Mutex Locking**: Utilizes the `async-mutex` library to ensure thread-safety in all operations.

2. **Single Responsibility Principle**: Each class has a well-defined responsibility (e.g., `KeyValueStore` manages the data store, `Handlers` manage command processing).

3. **Encapsulation**: Classes like `KeyValueStore` and `AttributeValue` encapsulate their data and provide methods to interact with it.


## Code Structure

* `main.ts`: Entry point of the application, handles the command loop.
* `KeyValueStore.ts`: Implements the core key-value store functionality with thread-safe operations.
* `AttributeValue.ts`: Defines the `AttributeValue` class for type-safe attribute values.
* `handlers.ts`: Contains the `Handlers` class for processing user commands.
