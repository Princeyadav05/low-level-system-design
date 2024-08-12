import * as readlineSync from "readline-sync";
import { Game } from "./game";

const game = new Game();
game.initialize();
game.displayBoard();

while (true) {
  const input = readlineSync.question(
    'Enter move (eg. e2 e4) or "exit" to quit: '
  );
  if (input.toLowerCase() === "exit") break;

  const [start, end] = input.split(" ");
  if (game.makeMove(start, end)) {
    game.displayBoard();
  } else {
    console.log("Invalid Move");
  }
}

console.log("Game Ended.");
