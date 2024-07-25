import { Ladder } from "./ladder";
import { Snake } from "./snake";

export class Board {
  private snakes: Snake[] = [];
  private ladders: Ladder[] = [];

  addSnake(snake: Snake): void {
    this.snakes.push(snake);
  }

  addLadder(ladder: Ladder): void {
    this.ladders.push(ladder);
  }

  getNewPosition(position: number): number {
    for (const snake of this.snakes) {
      if (snake.head === position) {
        return snake.tail;
      }
    }

    for (const ladder of this.ladders) {
      if (ladder.start === position) {
        return ladder.end;
      }
    }

    return position;
  }
}
