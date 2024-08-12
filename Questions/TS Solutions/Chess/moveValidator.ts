import { ChessBoard } from "./chessboard";
import { Position } from "./types";

export class MoveValidator {
  static isValidMove(
    board: ChessBoard,
    start: Position,
    end: Position
  ): boolean {
    const piece = board.getPiece(start);
    if (!piece) return false;

    // Check if the move is valid for the specific piece type
    if (!piece.canMove(board, end)) return false;

    // Implement additional validation (e.g., check if the move puts own king in check)
    // Stalemates etc

    return true;
  }
}
