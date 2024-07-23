// Game.ts
import { Board } from "./Board";
import { Direction } from "./Direction";
import { InputHandler } from "./InputHandler";
import { DisplayHandler } from "./DisplayHandler";

export enum GameState {
  IN_PROGRESS,
  WON,
  LOST,
}

export class Game {
  private board: Board;
  private currentScore: number;
  private gameState: GameState;
  private inputHandler: InputHandler;
  private displayHandler: DisplayHandler;

  constructor(private size: number = 4, private winningValue: number = 2048) {
    this.board = new Board(size);
    this.currentScore = 0;
    this.gameState = GameState.IN_PROGRESS;
    this.inputHandler = new InputHandler();
    this.displayHandler = new DisplayHandler();
  }

  start(): void {
    while (this.gameState === GameState.IN_PROGRESS) {
      this.displayHandler.printBoard(this.board);
      try {
        const direction = this.inputHandler.getUserInput();
        const moved = this.makeMove(direction);
        if (!moved) {
          console.log("Invalid move. Try again.");
        }
      } catch (error) {
        console.log("Invalid input. Please try again.");
      }
    }

    this.displayHandler.printBoard(this.board);
    // this.displayHandler.printGameStatus(this.gameState, this.currentScore);

    //     this.inputHandler.close();
  }

  private makeMove(direction: Direction): boolean {
    if (this.gameState !== GameState.IN_PROGRESS) {
      return false;
    }

    // const moved = this.board.moveTiles(direction);
    // return moved;
  }
}
