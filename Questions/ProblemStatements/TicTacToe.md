
## Tic Tac Toe Low Level Design

Design a command-line-based, 3x3 grid Tic Tac Toe game that can be played by 2-players.

### Requirements:

1. Board
	- 3x3 grid board for squares of the grid

2. Players
	- Game has 2 players. Every player has a name and a character. The character is by default, “X” and “O” for player 1 and 2, but players
          can pick their own characters.

	- Both players must not have the same character.

3. Game
	- Game starts with Player 1 inserting their character into one of the boxes
	- Print the board after initializing
	- Players get alternative turns, and insert their characters on boxes
	- On every turn, take command line input of which box to place character
	- After every turn show state of game
	- After every turn, one of 4 conditions can happen
	  - Player specifies wrong box (already has been used);
	    In this case, same player will try again (show Error: Square Already Filled)
	  - Placing the character results in game winning condition (specified below);
	    in this case end the game and declare winner
	  - Player specifies correct box, but doesn’t win game;
	    Give turn to other player and continue game
	  - Board is full (this was last entry), and no winner;
	    Declare game draw and end game
	- Winning conditions:
	  Same character in all boxes of:
	    - any row
	    - Any column
	    - Any diagonal

### Minimum Requirements
- Make sure that you have a working and demonstrable code
- Make sure that the code is functionally correct
- Code should be modular and readable
- Separation of concern should be addressed
- Please do not write everything in a single file (if not coding in C/C++)
- Code should easily accommodate new requirements and minimal changes
- There should be a main method from where the code could be easily testable
- Write unit tests, wherever applicable
- No need to create a GUI

### Optional Requirements

**Please do these only if you’ve time left. You can write your code such that these could be accommodated without changing your code much.**

- Keep the code extensible to change the size of the grid.
- Keep the code extensible to allow different types of pieces.
- Keep the code extensible to allow more than 2 players/piece types.