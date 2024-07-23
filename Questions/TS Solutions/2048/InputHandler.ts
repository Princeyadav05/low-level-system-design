// InputHandler.ts
import * as readlineSync from "readline-sync";
import { Direction } from "./Direction";

export class InputHandler {
  getUserInput(): Direction {
    const input = readlineSync.question(
      "Enter move (0: left, 1: right, 2: up, 3: down): "
    );

    switch (input.trim()) {
      case "0":
        return Direction.LEFT;
      case "1":
        return Direction.RIGHT;
      case "2":
        return Direction.UP;
      case "3":
        return Direction.DOWN;
      default:
        throw new Error("Invalid input");
    }
  }
}
