import { Game } from "./game";
import { Snake } from "./snake";
import { Ladder } from "./ladder";
import { InputHandler } from "./inputHandler";
import { OutputHandler } from "./outputHandler";

function validateSetup(snakes: Snake[], ladders: Ladder[]): void {
  const allPositions = new Set([
    ...snakes.map((s) => s.head),
    ...ladders.map((l) => l.start),
  ]);
  if (allPositions.size !== snakes.length + ladders.length) {
    throw new Error(
      "There are overlapping snakes or ladders at the same position"
    );
  }
}

function main() {
  const snakes = InputHandler.getSnakes();
  const ladders = InputHandler.getLadders();
  const playerNames = InputHandler.getPlayerNames();

  validateSetup(snakes, ladders);

  const game = new Game(snakes, ladders, playerNames);

  while (!game.isGameOver()) {
    const turnResult = game.playTurn();
    OutputHandler.printTurnResult(turnResult);
  }

  const winner = game.getWinner();
  if (winner) {
    OutputHandler.printWinner(winner.name);
  }
}

main();
