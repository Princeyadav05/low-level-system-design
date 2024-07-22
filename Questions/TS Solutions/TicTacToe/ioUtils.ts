import { PieceType } from "./pieceTypeEnums";
import readlineSync from "readline-sync";

export class IOUtil {
  askQuestion(question: string): string {
    return readlineSync.question(question);
  }

  printMessage(message: string): void {
    console.log(message);
  }

  printBoard(grid: PieceType[][]): void {
    console.log("\n");
    grid.forEach((row, index) => {
      console.log(row.join("  |  "));
      if (index < 2) {
        console.log("-".repeat(16));
      }
    });
    console.log("\n");
  }
}
