# 2048 Game

A command-line implementation of the popular 2048 puzzle game using TypeScript.

**Code Link**: [TypeScript](main.ts)

## How to Play

1. Run the game using `ts-node main.ts` in the project directory.
2. Use the following keys to move the tiles:
   - 0: Left
   - 1: Right
   - 2: Up
   - 3: Down
3. After each move, a new tile (2 or 4) will appear in an empty spot.
4. Combine tiles with the same number to create a tile with double the value.
5. The game ends when you reach 2048 or when no more moves are possible.
6. Type 'exit' at any time to end the game.

## Low-Level Concepts Used

This 2048 implementation utilizes several low-level design patterns and concepts to organize and structure the code effectively:

1. **Single Responsibility Principle**: Each class has a single, well-defined responsibility (e.g., `Board` manages the game grid, `Game` orchestrates the game flow).

2. **Encapsulation**: Classes like `Board` and `Tile` encapsulate their data and provide methods to interact with it, hiding the implementation details.

3. **Modularization**: The code is split into multiple files for better organization and separation of concerns.

4. **Factory Method**: The `createGrid` method in the `Board` class acts as a factory method for creating the initial game grid.

## Code Structure

* `main.ts`: Entry point of the application.
* `game.ts`: Contains the `Game` class that orchestrates the game flow.
* `board.ts`: Implements the `Board` class representing the game grid and tile manipulation logic.
* `tile.ts`: Defines the `Tile` class representing individual tiles on the board.
* `direction.ts`: Contains the `Direction` enum.
* `inputHandler.ts`: Manages user input operations.
* `displayHandler.ts`: Handles the display of the game board and messages.