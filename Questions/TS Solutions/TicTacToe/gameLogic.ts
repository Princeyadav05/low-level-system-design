import { PieceType } from "./pieceTypeEnums";

export class GameLogic {
  parseMove(move: string): [number, number] {
    const [rowStr, colStr] = move.split(" ");
    const row = parseInt(rowStr) - 1;
    const col = parseInt(colStr) - 1;

    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
      return [-1, -1];
    }

    return [row, col];
  }

  isWinningMove(grid: PieceType[][], row: number, col: number): boolean {
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
