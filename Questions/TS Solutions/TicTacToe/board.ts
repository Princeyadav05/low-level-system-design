import { PieceType } from "./pieceTypeEnums";

export class Board {
  private grid: PieceType[][];

  constructor() {
    this.grid = Array(3)
      .fill(null)
      .map(() => Array(3).fill(PieceType.Empty));
  }

  makeMove(row: number, col: number, piece: PieceType): boolean {
    if (this.isValidMode(row, col)) {
      this.grid[row][col] = piece;
      return true;
    }

    return false;
  }

  isValidMode(row: number, col: number): boolean {
    return (
      row >= 0 &&
      row < 3 &&
      col >= 0 &&
      col < 3 &&
      this.grid[row][col] === PieceType.Empty
    );
  }

  isFull(): boolean {
    for (let row of this.grid) {
      for (let cell of row) {
        if (cell === PieceType.Empty) {
          return false;
        }
      }
    }
    return true;
  }

  getGrid(): PieceType[][] {
    return this.grid;
  }
}
