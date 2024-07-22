# Tic-Tac-Toe Game

This Python program implements a simple Tic-Tac-Toe game that can be played by multiple players with different piece types.

**Code Link**: [Python](main.py)

## How to Play

1. Run the `main.py` file.
2. Players take turns entering their desired row and column to place their pieces on the game board.
3. The game continues until a player wins by forming a row, column, or diagonal of their pieces or until there are no more available spaces on the board (a tie).

## Features

- Supports multiple players with different piece types.
- Validates player input to ensure correct piece type selection and valid board positions.
- Prevents players from choosing the same piece type.
- Detects and announces the winner of the game.

## Low-Level Design Patterns Used

This Tic-Tac-Toe implementation utilizes several low-level design patterns to organize and structure the code effectively:

### 1. Singleton Pattern

- The `PieceType` enum is used to represent the different types of playing pieces (e.g., X, O, A, B).
- Enums in Python are implemented as singletons, ensuring that there is only one instance of each piece type.

### 2. Factory Pattern

- Players can choose their piece types during initialization, creating instances of the `PlayingPiece` class.
- The `TicTacToeGame` class acts as a factory for creating player objects with their chosen playing pieces.

### 3. Encapsulation

- Classes are designed with encapsulation principles in mind, providing getter and setter methods to access and modify player attributes and board state. (In the `Player` Class)
