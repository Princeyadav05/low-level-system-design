import { Board } from "./Board";
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

  //   printGameStatus(gameState: GameState, score: number): void {
  //     console.log(`Current Score: ${score}`);
  //     switch (gameState) {
  //       case GameState.WON:
  //         console.log("Congratulations! You won!");
  //         break;
  //       case GameState.LOST:
  //         console.log("Game over. Better luck next time!");
  //         break;
  //     }
  //   }
}
