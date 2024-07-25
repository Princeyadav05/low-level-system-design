import * as readlineSync from "readline-sync";
import { Snake } from "./snake";
import { Ladder } from "./ladder";

export class InputHandler {
  static getNumber(prompt: string): number {
    return parseInt(readlineSync.question(prompt));
  }

  static getString(prompt: string): string {
    return readlineSync.question(prompt);
  }

  static getSnakes(): Snake[] {
    const snakeCount = this.getNumber("Enter the number of snakes: ");
    const snakes: Snake[] = [];

    for (let i = 0; i < snakeCount; i++) {
      const [head, tail] = readlineSync
        .question(`Enter head and tail for snake ${i + 1} (space-separated): `)
        .split(" ")
        .map(Number);

      if (head <= tail || head === 100 || tail === 0) {
        throw new Error(
          `Invalid snake input: head (${head}) must be greater than tail (${tail}) and not at 100`
        );
      }
      snakes.push(new Snake(head, tail));
    }
    return snakes;
  }

  static getLadders(): Ladder[] {
    const ladderCount = this.getNumber("Enter the number of ladders: ");
    const ladders: Ladder[] = [];

    for (let i = 0; i < ladderCount; i++) {
      const [start, end] = readlineSync
        .question(`Enter start and end for ladder ${i + 1} (space-separated): `)
        .split(" ")
        .map(Number);

      if (end === 100 || end <= start || start === 0) {
        throw new Error(
          `Invalid ladder input: end (${end}) must be greater than start (${end}) and not at 100 or not at 0`
        );
      }

      ladders.push(new Ladder(start, end));
    }

    return ladders;
  }

  static getPlayerNames(): string[] {
    const playerCount = this.getNumber("Enter the number of players: ");
    const playerNames: string[] = [];
    for (let i = 0; i < playerCount; i++) {
      const name = this.getString(`Enter name for player ${i + 1}: `);
      playerNames.push(name);
    }
    return playerNames;
  }
}
