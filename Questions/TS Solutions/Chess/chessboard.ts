import { Piece } from "./piece";
import { PieceFactory } from "./pieceFactory";
import { Color, Position } from "./types";

export class ChessBoard {
  private board: (Piece | null)[][];

  constructor() {
    this.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
  }

  initialize() {
    const setupRow = (row: number, color: Color) => {
      const pieces = [
        "Rook",
        "Knight",
        "Bishop",
        "Queen",
        "King",
        "Bishop",
        "Knight",
        "Rook",
      ];
      pieces.forEach((type, col) => {
        this.board[row][col] = PieceFactory.createPiece(type, color, {
          row,
          col,
        });
      });
    };

    setupRow(0, Color.Black);
    setupRow(7, Color.White);

    for (let col = 0; col < 8; col++) {
      this.board[1][col] = PieceFactory.createPiece("Pawn", Color.Black, {
        row: 1,
        col,
      });
      this.board[6][col] = PieceFactory.createPiece("Pawn", Color.White, {
        row: 6,
        col,
      });
    }
  }

  getPiece(pos: Position): Piece | null {
    return this.board[pos.row][pos.col];
  }

  movePiece(start: Position, end: Position): void {
    const piece = this.board[start.row][start.col];
    this.board[end.row][end.col] = piece;
    this.board[start.row][start.col] = null;
    if (piece) piece.position = end;
  }

  toString(): string {
    return this.board
      .map((row, rowIndex) =>
        row
          .map((piece, colIndex) =>
            piece
              ? `${piece.color === Color.White ? "W" : "B"}${piece.symbol}`
              : "--"
          )
          .join(" ")
      )
      .join("\n");
  }
}
