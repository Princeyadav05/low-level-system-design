## Chess Low Level Design

Let's look at the game of Chess. Chess is a two-player strategy game played on an 8*8 checkered board which looks something like this:

### Rules of the game
- The game is played between two players. 
- One player controls an army of white pieces and the other controls the army of black pieces.
- Each army includes the following pieces: 1 King, 1 Queen, 2 Knights, 2 Rooks, 2 Bishops, 8 Pawns
- Each piece has its own way of moving on the board.
- A player may move only to an empty cell unless it is trying to capture a piece of the other player.
- A piece is captured when a player moves to a position currently occupied by a piece of the opponent.
- Each player needs to move a piece in each turn.
- The game starts with the player owning the white pieces making the first move. After this, the players play alternate turns.
- There are more rules but it is outside the scope of this problem.

#### Piece Moves
Let's look at all the valid moves of the different types of pieces.

##### Pawn
- A pawn can move to a cell which is one step immediately in front of it.
- If it is the first move of that pawn, it can move two positions to a cell in front. Both the cells in front of it needs to be unoccupied.
- It can also move one step diagonally in front while capturing a piece of the opponent. The capture cannot happen without moving diagonally.

##### Knight
- A knight moves in an 'L' shape, i.e., two steps horizontally and one step vertically or two steps vertically and one step horizontally.
- The knight can leap over other pieces to land directly on the destination cell.

##### Rook
- A rook can move any number of steps either horizontally or vertically without leaping over any other piece.

##### Bishop
- A bishop can move any number of steps diagonally without leaping over any other piece.

##### Queen
- A queen can move any number of steps in any direction (horizontally, vertically, or diagonally) without leaping over any other piece.

##### King
- A king can move one step in any direction (horizontally, vertically, or diagonally).

### Requirements
Create a command-line application for a chess validator with the following requirements:

Initialize a chessboard with two players and all the pieces in the right positions.

- Print the board after initializing.
- Allow the user to make moves on behalf of both the players.
- The user will make a move by entering the start position and the end position.
- You need to determine the piece and make the move if it is valid.
- Valid move:
- The piece is controlled by the player having the current turn
- The move is valid based on how that particular piece can move
- The start and end position are inside the board
- If the move is invalid
- print 'Invalid Move'
- the same player plays again
- If the move is valid:
- move the piece to the destination and remove any captured piece
- print the board after the move
- The position of a piece is represented as the column name (a-h) followed by the row number (1-8).

### Examples
- a1 represents the cell at the extreme bottom-left
- h8 represents the cell at the extreme top-right.

#### Input/Output Format
The code should strictly follow the input/output format and will be tested with provided test cases.

##### Input Format
Multiple lines with each line containing the Start Position End Position. Both the positions will be separated by a space.

Stop taking the input when you encounter the word exit.

##### Output Format
Print the initial board followed by an extra line. This would be followed by the board after each move and an extra line after every valid move. In case of an invalid move do not print the board and instead print:

##### Invalid Move

The board needs to be printed in the following format based on the respective position:
```
BR BN BB BQ BK BB BN BR
BP BP BP BP BP BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP WP WP WP WP
WR WN WB WQ WK WB WN WR
```

### Examples

##### Sample Input
```
e2 e4
e7 e5
f1 c4
b8 c6
d1 h5
g8 f6
h5 f7
f8 f7
g7 f7
h8 f7
d8 f7
c6 f7
c4 f7
h8 g8
f2 f4
e5 f4
f7 e8
exit
```
##### Expected Output
```
BR BN BB BQ BK BB BN BR
BP BP BP BP BP BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP WP WP WP WP
WR WN WB WQ WK WB WN WR

BR BN BB BQ BK BB BN BR
BP BP BP BP BP BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- -- -- -- --
-- -- -- -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK WB WN WR

BR BN BB BQ BK BB BN BR
BP BP BP BP -- BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- BP -- -- --
-- -- -- -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK WB WN WR

BR BN BB BQ BK BB BN BR
BP BP BP BP -- BP BP BP
-- -- -- -- -- -- -- --
-- -- -- -- BP -- -- --
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK -- WN WR

BR -- BB BQ BK BB BN BR
BP BP BP BP -- BP BP BP
-- -- BN -- -- -- -- --
-- -- -- -- BP -- -- --
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB WQ WK -- WN WR

BR -- BB BQ BK BB BN BR
BP BP BP BP -- BP BP BP
-- -- BN -- -- -- -- --
-- -- -- -- BP -- -- WQ
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB -- WK -- WN WR

BR -- BB BQ BK BB -- BR
BP BP BP BP -- BP BP BP
-- -- BN -- -- BN -- --
-- -- -- -- BP -- -- WQ
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB -- WK -- WN WR

BR -- BB BQ BK BB -- BR
BP BP BP BP -- WQ BP BP
-- -- BN -- -- BN -- --
-- -- -- -- BP -- -- --
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB -- WK -- WN WR

Invalid Move
Invalid Move
Invalid Move
Invalid Move
Invalid Move
Invalid Move
Invalid Move
BR -- BB BQ BK BB BR --
BP BP BP BP -- WQ BP BP
-- -- BN -- -- BN -- --
-- -- -- -- BP -- -- --
-- -- WB -- WP -- -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- WP WP WP
WR WN WB -- WK -- WN WR

BR -- BB BQ BK BB BR --
BP BP BP BP -- WQ BP BP
-- -- BN -- -- BN -- --
-- -- -- -- BP -- -- --
-- -- WB -- WP WP -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- -- WP WP
WR WN WB -- WK -- WN WR

BR -- BB BQ BK BB BR --
BP BP BP BP -- WQ BP BP
-- -- BN -- -- BN -- --
-- -- -- -- -- -- -- --
-- -- WB -- WP BP -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- -- WP WP
WR WN WB -- WK -- WN WR

BR -- BB BQ WQ BB BR --
BP BP BP BP -- -- BP BP
-- -- BN -- -- BN -- --
-- -- -- -- -- -- -- --
-- -- WB -- WP BP -- --
-- -- -- -- -- -- -- --
WP WP WP WP -- -- WP WP
WR WN WB -- WK -- WN WR
```

### Expectations
- Make sure that you have a working and demonstrable code
- Make sure that the code is functionally correct
- Code should be modular and readable
- Separation of concern should be addressed
- Please do not write everything in a single file (if not coding in C/C++)
- Code should easily accommodate new requirements and minimal changes
- There should be a main method from where the code could be easily testable

#### Optional
- Write unit tests, if possible
- No need to create a GUI
- Optional Requirements
- Please do these only if you’ve time left. You can write your code such that these could be accommodated without changing your code much.
- Keep the code extensible to allow new types of pieces with any type of move.
- Keep the code extensible to change the move style of any of the existing pieces.
- Keep the code extensible to change the size of the grid.
- Keep the code extensible to change the starting positions on the board.