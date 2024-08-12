import { ChessBoard } from "./chessboard";
import { MoveValidator } from "./moveValidator";
import { Player } from "./player";
import { Color, Position } from "./types";

export class Game {
  private board: ChessBoard;
  private players: [Player, Player];
  private currentPlayerIndex: number;

  constructor() {
    this.board = new ChessBoard();
    this.players = [new Player(Color.White), new Player(Color.Black)];
    this.currentPlayerIndex = 0;
  }

  initialize(): void {
    this.board.initialize();
  }

  makeMove(start: string, end: string): boolean {
    const startPos = this.parsePosition(start);
    const endPos = this.parsePosition(end);

    if (!startPos || !endPos) return false;

    const piece = this.board.getPiece(startPos);
    if (!piece || piece.color !== this.currentPlayer.color) return false;

    if (MoveValidator.isValidMove(this.board, startPos, endPos)) {
      this.board.movePiece(startPos, endPos);
      this.switchTurn();
      return true;
    }

    return false;
  }

  displayBoard(): void {
    console.log(this.board.toString());
  }

  private switchTurn(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }

  private get currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  private parsePosition(pos: string): Position | null {
    if (pos.length !== 2) return null;
    const col = pos.charCodeAt(0) - "a".charCodeAt(0);
    const row = 8 - parseInt(pos[1]);
    if (col < 0 || col > 7 || row < 0 || row > 7) return null;
    return { row, col };
  }
}
