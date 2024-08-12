import { ChessBoard } from "./chessboard";
import { Color, Position } from "./types";

export abstract class Piece {
  constructor(
    public readonly color: Color,
    public position: Position,
    public readonly symbol: string
  ) {}

  abstract canMove(board: ChessBoard, end: Position): boolean;

  isMoveDiagonal(start: Position, end: Position): boolean {
    return Math.abs(start.row - end.row) === Math.abs(start.col - end.col);
  }

  isMoveHorizontal(start: Position, end: Position): boolean {
    return start.row === end.row;
  }

  isMoveVertical(start: Position, end: Position): boolean {
    return start.col === end.col;
  }
}

export class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "P");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    const direction = this.color === Color.White ? -1 : 1;
    const startRow = this.position.row;
    const startCol = this.position.col;

    // Move one square forward
    if (end.col === startCol && end.row === startRow + direction) {
      return board.getPiece(end) === null;
    }

    // Move two squares forward from starting position
    if (end.col === startCol && end.row === startRow + 2 * direction) {
      const firstMove =
        (this.color === Color.White && startRow === 6) ||
        (this.color === Color.Black && startRow === 1);
      const intermediateSquare: Position = {
        row: startRow + direction,
        col: startCol,
      };
      return (
        firstMove &&
        board.getPiece(end) === null &&
        board.getPiece(intermediateSquare) === null
      );
    }

    // Capture diagonally
    if (
      Math.abs(end.col - startCol) === 1 &&
      end.row === startRow + direction
    ) {
      const targetPiece = board.getPiece(end);
      return targetPiece !== null && targetPiece.color !== this.color;
    }

    return false;
  }
}

export class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "R");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    if (
      !this.isMoveHorizontal(this.position, end) &&
      !this.isMoveVertical(this.position, end)
    ) {
      return false;
    }

    const rowStep =
      end.row > this.position.row ? 1 : end.row < this.position.row ? -1 : 0;
    const colStep =
      end.col > this.position.col ? 1 : end.col < this.position.col ? -1 : 0;

    let currentRow = this.position.row + rowStep;
    let currentCol = this.position.col + colStep;

    while (currentRow !== end.row || currentCol !== end.col) {
      if (board.getPiece({ row: currentRow, col: currentCol }) !== null) {
        return false;
      }
      currentRow += rowStep;
      currentCol += colStep;
    }

    const targetPiece = board.getPiece(end);
    return targetPiece === null || targetPiece.color !== this.color;
  }
}

export class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "N");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    const rowDiff = Math.abs(end.row - this.position.row);
    const colDiff = Math.abs(end.col - this.position.col);

    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
      const targetPiece = board.getPiece(end);
      return targetPiece === null || targetPiece.color !== this.color;
    }

    return false;
  }
}

export class Bishop extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "B");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    if (!this.isMoveDiagonal(this.position, end)) {
      return false;
    }

    const rowStep = end.row > this.position.row ? 1 : -1;
    const colStep = end.col > this.position.col ? 1 : -1;

    let currentRow = this.position.row + rowStep;
    let currentCol = this.position.col + colStep;

    while (currentRow !== end.row && currentCol !== end.col) {
      if (board.getPiece({ row: currentRow, col: currentCol }) !== null) {
        return false;
      }
      currentRow += rowStep;
      currentCol += colStep;
    }

    const targetPiece = board.getPiece(end);
    return targetPiece === null || targetPiece.color !== this.color;
  }
}

export class Queen extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "Q");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    if (
      !this.isMoveDiagonal(this.position, end) &&
      !this.isMoveHorizontal(this.position, end) &&
      !this.isMoveVertical(this.position, end)
    ) {
      return false;
    }

    const rowStep =
      end.row > this.position.row ? 1 : end.row < this.position.row ? -1 : 0;
    const colStep =
      end.col > this.position.col ? 1 : end.col < this.position.col ? -1 : 0;

    let currentRow = this.position.row + rowStep;
    let currentCol = this.position.col + colStep;

    while (currentRow !== end.row || currentCol !== end.col) {
      if (board.getPiece({ row: currentRow, col: currentCol }) !== null) {
        return false;
      }
      currentRow += rowStep;
      currentCol += colStep;
    }

    const targetPiece = board.getPiece(end);
    return targetPiece === null || targetPiece.color !== this.color;
  }
}

export class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, "K");
  }

  canMove(board: ChessBoard, end: Position): boolean {
    const rowDiff = Math.abs(end.row - this.position.row);
    const colDiff = Math.abs(end.col - this.position.col);

    if (rowDiff <= 1 && colDiff <= 1) {
      const targetPiece = board.getPiece(end);
      return targetPiece === null || targetPiece.color !== this.color;
    }

    return false;
  }
}
