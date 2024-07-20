import { Board } from "./board";
import { Player } from "./player";
import readlineSync from "readline-sync";

export class Game {
  private board: Board;
  private players: Player[];

  private currentPlayerIndex: number;

  constructor() {
    this.board = new Board();
    this.players = [];
    this.currentPlayerIndex = 0;
  }

  initializeGame(): void {
    const player1Name = readlineSync.question("Enter name for Player X: ");
    const player2Name = readlineSync.question("Enter name for Player O: ");

    this.players = [new Player(player1Name, "X"), new Player(player2Name, "O")];
    console.log("Initial Board:");

    this.board.printBoard();
  }

  playGame(): void {
    while (true) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      const move = readlineSync.question(
        `${currentPlayer.name}'s turn (${currentPlayer.piece}). Enter row(1-3) and column(1-3) or 'exit': `
      );

      if (move.toLowerCase() === "exit") {
        console.log("Exiting game...");
        break;
      }

      const [row, col] = move.split(" ").map((el) => parseInt(el) - 1);

      if (isNaN(row) || isNaN(col)) {
        console.log(
          "Invalid input. Please enter two numbers separated by a space."
        );
        continue;
      }

      if (this.board.makeMove(row, col, currentPlayer.piece)) {
        this.board.printBoard();

        if (this.isWinningMove(row, col)) {
          console.log(`${currentPlayer.name} wins!`);
          break;
        }

        if (this.board.isFull()) {
          console.log("It's a draw!");
          break;
        }

        this.switchPlayer();
      }
    }
  }

  private switchPlayer(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }

  private isWinningMove(row: number, col: number): boolean {
    const grid = this.board.getGrid();
    const piece = grid[row][col];

    // Row
    if (grid[row].every((el) => el === piece)) {
      return true;
    }

    // Column
    if (grid.every((row) => row[col] === piece)) {
      return true;
    }

    // Diagonal
    if (row === col && grid.every((row, col) => row[col] === piece)) {
      return true;
    }

    // Reverse Diagonal
    if (row + col === 2 && grid.every((row, col) => row[2 - col] === piece)) {
      return true;
    }

    return false;
  }
}
