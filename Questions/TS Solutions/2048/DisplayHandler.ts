import { Board } from "./Board";
import { GameState } from "./Game";
// import { GameState } from "./GameController";

export class DisplayHandler {
  printBoard(board: Board): void {
    const grid = board.getGrid();
    for (const row of grid) {
      let rowString = "";
      for (const tile of row) {
        rowString += tile.isEmpty() ? "  -  " : `  ${tile.getValue()}  `;
      }
      console.log(rowString.trim());
    }
    console.log();
  }

  private padCenter(str: string, length: number): string {
    const padding = length - str.length;
    const leftPad = Math.floor(padding / 2);
    const rightPad = padding - leftPad;
    return " ".repeat(leftPad) + str + " ".repeat(rightPad);
  }

  printGameStatus(gameState: GameState): void {
    switch (gameState) {
      case GameState.IN_PROGRESS:
        console.log("Game in progress. Keep playing!");
        break;
      case GameState.WON:
        console.log("Congratulations! You won!");
        break;
      case GameState.LOST:
        console.log("Game over. Better luck next time!");
        break;
    }
    console.log();
  }
}
