
# Tic-Tac-Toe Game

A command-line implementation of the classic Tic-Tac-Toe game using TypeScript.

**Code Link**: [TypeScript](Questions/TypeScript%20Solutions/TicTacToe/)

## How to Play

1. Run the game using `ts-node main.ts` in the project directory.
2. Enter names for Player ❌ and Player ⭕.
3. On your turn, enter the row (1-3) and column (1-3) where you want to place your piece, separated by a space.
4. The game ends when a player wins or the board is full (draw).
5. Type 'exit' at any time to end the game.


## Low-Level Concepts Used

This Tic-Tac-Toe implementation utilizes several low-level design patterns to organize and structure the code effectively:

1. **Singleton Pattern**: The `Game` class acts as a singleton, managing the overall game state and flow.

2. **Factory Method Pattern**: Player creation in the `Game` class can be extended to create different types of players.

3. **Modularization**: The code is split into multiple files (board.ts, player.ts, game.ts, gameLogic.ts, ioUtil.ts, enums.ts) for better organization and separation of concerns.

## Code Structure

- `main.ts`: Entry point of the application.
- `game.ts`: Contains the `Game` class that orchestrates the game flow.
- `board.ts`: Implements the `Board` class representing the game board.
- `player.ts`: Defines the `Player` class.
- `gameLogic.ts`: Handles game rules and win condition checking.
- `ioUtil.ts`: Manages input/output operations.
- `enums.ts`: Defines the `PieceType` enum.