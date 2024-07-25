# Snake and Ladder Game

A command-line implementation of the classic Snake and Ladder board game using TypeScript.

**Code Link**: [TypeScript](main.ts)

## How to Play

1. Run the game using `ts-node main.ts` in the project directory.
2. Enter the number of snakes and their head and tail positions when prompted.
3. Enter the number of ladders and their start and end positions when prompted.
4. Enter the number of players and their names when prompted.
5. The game will automatically progress, rolling dice for each player in turn.
6. Players move according to their dice rolls, climbing ladders or sliding down snakes as they encounter them.
7. The first player to reach 100 wins the game.

## Low-Level Concepts Used

This Snake and Ladder implementation utilizes several low-level design patterns and concepts to organize and structure the code effectively:

1. **Single Responsibility Principle**: Each class has a single, well-defined responsibility (e.g., `Board` manages the game board, `Game` orchestrates the game flow, `Dice` handles random number generation).

2. **Encapsulation**: Classes like `Board`, `Player`, and `Game` encapsulate their data and provide methods to interact with it, hiding the implementation details.

3. **Modularization**: The code is split into multiple files for better organization and separation of concerns.

4. **Interface Segregation**: The `TurnResult` interface is used to structure the output of each turn, promoting clear communication between components.

5. **Dependency Inversion**: The `Game` class depends on abstractions (like `Board` and `Dice`) rather than concrete implementations, allowing for easier testing and modification.

6. **Error Handling**: The implementation includes robust error handling to manage invalid inputs and unexpected scenarios.

## Code Structure

* `main.ts`: Entry point of the application, handles game setup and main loop.
* `game.ts`: Contains the `Game` class that orchestrates the game flow.
* `board.ts`: Implements the `Board` class representing the game board and manages snakes and ladders.
* `player.ts`: Defines the `Player` class representing individual players in the game.
* `snake.ts`: Contains the `Snake` class representing snakes on the board.
* `ladder.ts`: Contains the `Ladder` class representing ladders on the board.
* `dice.ts`: Implements the `Dice` class for generating random moves.
* `inputHandler.ts`: Manages user input operations for game setup.
* `outputHandler.ts`: Handles the display of game progress and results.