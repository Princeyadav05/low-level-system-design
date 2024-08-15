# Expense Sharing Application

A command-line implementation of an expense sharing application using TypeScript.

**Code Link**: [TypeScript](index.ts)

## How to Use

1. Run the application: ```npm install && npm start```
2. Enter commands as per the following format:
   - To create a board: `BOARD CREATE <board-name>`
   - To create a list: `LIST CREATE <board-id> <list-name>`
   - To create a card: `CARD CREATE <board-id> <list-id> <card-name>`
   - To show all boards: `SHOW`
   - To show a specific board: `SHOW BOARD <board-id>`
   - To show a specific list: `SHOW LIST <board-id> <list-id>`
   - To show a specific card: `SHOW CARD <board-id> <list-id> <card-id>`
3. Type 'EXIT' at any time to end the application.

## Low-Level Concepts Used

This Project Management Application implementation utilizes several low-level design patterns and concepts to organize and structure the code effectively:

1. **Single Responsibility Principle**: Each class has a single, well-defined responsibility (e.g., `User` manages user data, `Board` handles board details, `ProjectManagementSystem` orchestrates the overall system management).

2. **Open/Closed Principle**: The design is open for extension (e.g., new entity types can be easily added) but closed for modification.

3. **Liskov Substitution Principle**: All entities (Board, List, Card) can be treated polymorphically when necessary.

4. **Interface Segregation Principle**: Interfaces are kept small and specific (e.g., potential for a `Modifiable` interface for entities that can be modified).

5. **Dependency Inversion Principle**: High-level modules (like `ProjectManagementSystem`) depend on abstractions (like entity interfaces), not concrete implementations.

6. **Factory Method Pattern**: Although not explicitly implemented, the creation of entities follows a factory-like pattern within the `ProjectManagementSystem` class.

7. **Command Pattern**: The command handling structure in `index.ts` follows a simplified version of the Command pattern.

## Code Structure

* `index.ts`: Entry point of the application, handles user input and application flow.
* `User.ts`: Defines the `User` class representing a user in the system.
* `Board.ts`: Implements the `Board` class representing a project board.
* `List.ts`: Defines the `List` class representing a list within a board.
* `Card.ts`: Implements the `Card` class representing a task card.
* `ProjectManagementSystem.ts`: Contains the `ProjectManagementSystem` class that orchestrates the entire system.

## Sample Usage

```
Welcome to the Project Management System!
Enter commands (type "EXIT" to quit):
> BOARD CREATE work@tech
Created board: 5da1583ec25d2a7e246b0375
> SHOW BOARD 5da1583ec25d2a7e246b0375
{"id": "5da1583ec25d2a7e246b0375", "name": "work@tech", "privacy": "PUBLIC"}
> SHOW
[{"id": "5da1583ec25d2a7e246b0375", "name": "work@tech", "privacy": "PUBLIC"}]
> BOARD 5da1583ec25d2a7e246b0375 name workat.tech
Modified board 5da1583ec25d2a7e246b0375
> BOARD 5da1583ec25d2a7e246b0375 privacy PRIVATE
Modified board 5da1583ec25d2a7e246b0375
> SHOW BOARD 5da1583ec25d2a7e246b0375
{"id": "5da1583ec25d2a7e246b0375", "name": "workat.tech", "privacy": "PRIVATE"}
> LIST CREATE 5da1583ec25d2a7e246b0375 "To Do"
Created list: 5da1583547c78c15a1408df2
> CARD CREATE 5da1583ec25d2a7e246b0375 5da1583547c78c15a1408df2 "Implement login functionality"
Created card: 5da1583547c78c15a14kjsd8