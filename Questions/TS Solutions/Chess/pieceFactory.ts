import { Piece, Pawn, Rook, Knight, Bishop, Queen, King } from "./piece";
import { Color, Position } from "./types";

export class PieceFactory {
  static createPiece(type: string, color: Color, position: Position): Piece {
    switch (type.toLowerCase()) {
      case "pawn":
        return new Pawn(color, position);
      case "rook":
        return new Rook(color, position);
      case "knight":
        return new Knight(color, position);
      case "bishop":
        return new Bishop(color, position);
      case "queen":
        return new Queen(color, position);
      case "king":
        return new King(color, position);
      default:
        throw new Error(`Unknown piece type: ${type}`);
    }
  }
}
