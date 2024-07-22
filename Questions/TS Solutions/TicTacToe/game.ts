import { Board } from "./board";
import { GameLogic } from "./gameLogic";
import { IOUtil } from "./ioUtils";
import { PieceType } from "./pieceTypeEnums";
import { Player } from "./player";

export class Game {
  private board: Board;
  private players: Player[];
  private currentPlayerIndex: number;
  private ioUtil: IOUtil;
  private gameLogic: GameLogic;

  constructor() {
    this.board = new Board();
    this.players = [];
    this.currentPlayerIndex = 0;
    this.ioUtil = new IOUtil();
    this.gameLogic = new GameLogic();
  }

  initializeGame(): void {
    const player1Name = this.ioUtil.askQuestion(
      `Enter name for Player ${PieceType.X}: `
    );
    const player2Name = this.ioUtil.askQuestion(
      `Enter name for Player ${PieceType.O}: `
    );

    this.players = [
      new Player(player1Name, PieceType.X),
      new Player(player2Name, PieceType.O),
    ];
    this.ioUtil.printMessage("Initial board:");
    this.ioUtil.printBoard(this.board.getGrid());
  }

  playGame(): void {
    while (true) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      const move = this.ioUtil.askQuestion(
        `${currentPlayer.name}'s turn (${currentPlayer.piece}). Enter row(1-3) and column(1-3) or 'exit': `
      );

      if (move.toLowerCase() === "exit") {
        this.ioUtil.printMessage("Exiting game...");
        break;
      }

      const [row, col] = this.gameLogic.parseMove(move);

      if (row === -1 || col === -1) {
        this.ioUtil.printMessage(
          "Invalid input. Please enter two numbers separated by a space."
        );
        continue;
      }

      if (this.board.makeMove(row, col, currentPlayer.piece)) {
        const grid = this.board.getGrid();
        this.ioUtil.printBoard(grid);

        if (this.gameLogic.isWinningMove(grid, row, col)) {
          this.ioUtil.printMessage(`${currentPlayer.name} wins!`);
          break;
        }

        if (this.board.isFull()) {
          this.ioUtil.printMessage("It's a draw!");
          break;
        }

        this.switchPlayer();
      }
    }
  }

  private switchPlayer(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }
}
