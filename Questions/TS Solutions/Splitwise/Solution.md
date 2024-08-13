# Expense Sharing Application

A command-line implementation of an expense sharing application using TypeScript.

**Code Link**: [TypeScript](index.ts)

## How to Use

1. Run the application: ```npm install && ts-node index.ts```
2. Enter commands as per the following format:
   - To add an expense: `EXPENSE <user-id-of-person-who-paid> <amount> <no-of-users> <space-separated-list-of-users> <EQUAL/EXACT/PERCENT> <space-separated-values-in-case-of-non-equal>`
   - To show all balances: `SHOW`
   - To show balance for a specific user: `SHOW <user-id>`
3. Type 'exit' at any time to end the application.

## Low-Level Concepts Used

This Expense Sharing Application implementation utilizes several low-level design patterns and concepts to organize and structure the code effectively:

1. **Single Responsibility Principle**: Each class has a single, well-defined responsibility (e.g., `User` manages user data, `Expense` handles expense details, `ExpenseManager` orchestrates the overall expense management).

2. **Open/Closed Principle**: The design is open for extension (e.g., new expense split types can be easily added) but closed for modification.

3. **Liskov Substitution Principle**: All split strategies inherit from the `SplitStrategy` interface and can be used interchangeably.

4. **Interface Segregation Principle**: Interfaces are kept small and specific (e.g., `SplitStrategy` interface).

5. **Dependency Inversion Principle**: High-level modules (like `ExpenseManager`) depend on abstractions (like `SplitStrategy`), not concrete implementations.

6. **Factory Method Pattern**: The `ExpenseSplitFactory` class uses the Factory Method pattern to create different types of split strategies.

7. **Strategy Pattern**: Different split strategies (Equal, Exact, Percent) implement the `SplitStrategy` interface, allowing for interchangeable algorithms.

## Code Structure

* `index.ts`: Entry point of the application, handles user input and application flow.
* `User.ts`: Defines the `User` class representing a user in the system.
* `Expense.ts`: Implements the `Expense` class representing an expense.
* `ExpenseSplit.ts`: Defines the `ExpenseSplit` class for individual expense splits.
* `Balance.ts`: Implements the `Balance` class for tracking balances between users.
* `ExpenseManager.ts`: Contains the `ExpenseManager` class that orchestrates expense management.
* `SplitStrategy.ts`: Defines the `SplitStrategy` interface for different split strategies.
* `EqualSplitStrategy.ts`, `ExactSplitStrategy.ts`, `PercentSplitStrategy.ts`: Implement different split strategies.
* `ExpenseSplitFactory.ts`: Implements the `ExpenseSplitFactory` class for creating split strategies.

## Sample Usage

```
Enter command: EXPENSE u1 1000 4 u1 u2 u3 u4 EQUAL

Enter command: SHOW
User4 owes User1: 250.00
User3 owes User1: 250.00
User2 owes User1: 250.00

Enter command: EXPENSE u1 1250 2 u2 u3 EXACT 370 880

Enter command: SHOW
User3 owes User1: 1130.00
User2 owes User1: 620.00
User4 owes User1: 250.00

Enter command: EXPENSE u4 1200 4 u1 u2 u3 u4 PERCENT 40 20 20 20

Enter command: SHOW u1
User1 owes User4: 230.00

Enter command: SHOW
User3 owes User1: 1130.00
User3 owes User4: 240.00
User2 owes User1: 620.00
User2 owes User4: 240.00
User1 owes User4: 230.00

Enter command: exit
```
