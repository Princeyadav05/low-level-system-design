# Chess Validator

A command-line implementation of a chess validator using TypeScript.

**Code Link**: [TypeScript](main.ts)

## How to Play

1. Run the game using `ts-node main.ts` in the project directory.
2. Enter moves in algebraic notation (e.g., "e2 e4" to move a piece from e2 to e4).
3. The validator will check if the move is legal according to chess rules.
4. If the move is valid, the board will be updated and displayed.
5. If the move is invalid, you'll see an "Invalid Move" message.
6. Type 'exit' at any time to end the game.

## Low-Level Concepts Used

This Chess Validator implementation utilizes several low-level design patterns and concepts to organize and structure the code effectively:

1. **Single Responsibility Principle**: Each class has a single, well-defined responsibility (e.g., `ChessBoard` manages the board state, `Piece` classes handle piece-specific move logic).

2. **Open/Closed Principle**: The design is open for extension (e.g., new piece types can be easily added) but closed for modification.

3. **Liskov Substitution Principle**: All piece types inherit from the `Piece` base class and can be used interchangeably where a `Piece` is expected.

4. **Interface Segregation Principle**: Interfaces are kept small and specific (e.g., `Position` interface).

5. **Dependency Inversion Principle**: High-level modules (like `Game`) depend on abstractions (like `Piece`), not concrete implementations.

6. **Factory Method Pattern**: The `PieceFactory` class uses the Factory Method pattern to create different types of chess pieces.

7. **Encapsulation**: Classes like `ChessBoard` and `Piece` encapsulate their data and provide methods to interact with it, hiding the implementation details.

8. **Modularization**: The code is split into multiple files for better organization and separation of concerns.

## Code Structure

* `main.ts`: Entry point of the application, handles user input and game flow.
* `game.ts`: Contains the `Game` class that orchestrates the chess game.
* `chessboard.ts`: Implements the `ChessBoard` class representing the game board and piece placement.
* `piece.ts`: Defines the abstract `Piece` class and concrete implementations for each chess piece type.
* `pieceFactory.ts`: Implements the `PieceFactory` class for creating chess pieces.
* `moveValidator.ts`: Contains the `MoveValidator` class for validating chess moves.
* `player.ts`: Defines the `Player` class representing a chess player.
* `types.ts`: Contains type definitions and interfaces used throughout the application.

## Game
```
ts-node Chess/main.ts

BR BN BB BQ BK BB BN BR
BP BP BP BP BP BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP WP WP WP WP
WR WN WB WQ WK WB WN WR

Enter move (eg. e2 e4) or "exit" to quit: e2 e4

BR BN BB BQ BK BB BN BR
BP BP BP BP BP BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK WB WN WR

Enter move (eg. e2 e4) or "exit" to quit: e7 e5

BR BN BB BQ BK BB BN BR
BP BP BP BP -- BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- BP -- -- --
-- -- -- -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK WB WN WR

Enter move (eg. e2 e4) or "exit" to quit: 
```
