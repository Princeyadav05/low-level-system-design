import { Board } from "./board";
import { Dice } from "./dice";
import { Ladder } from "./ladder";
import { Player } from "./player";
import { Snake } from "./snake";

interface TurnResult {
  playerName: string;
  diceValue: number;
  initialPosition: number;
  finalPosition: number;
  message: string;
}

export class Game {
  private board: Board;
  private players: Player[];
  private dice: Dice;
  private currentPlayerIndex = 0;

  constructor(snakes: Snake[], ladders: Ladder[], playerNames: string[]) {
    this.board = new Board();
    this.players = playerNames.map((name) => new Player(name));
    this.dice = new Dice();

    snakes.forEach((snake) => this.board.addSnake(snake));
    ladders.forEach((ladder) => this.board.addLadder(ladder));
  }

  playTurn(): TurnResult {
    const currentPlayer = this.players[this.currentPlayerIndex];
    const diceRoll = this.dice.roll();
    const initialPosition = currentPlayer.position;

    let newPosition = initialPosition + diceRoll;
    if (newPosition > 100) {
      newPosition = initialPosition;
    }

    currentPlayer.position = newPosition;

    const finalPosition = this.board.getNewPosition(newPosition);
    currentPlayer.position = finalPosition;

    let output = `${currentPlayer.name} rolled a ${diceRoll} and moved from ${initialPosition} to ${newPosition}`;

    if (newPosition > 100) {
      output += ` (dice roll of ${diceRoll} would exceed 100, so no move)`;
    } else if (finalPosition > newPosition) {
      output += ` (climbed a ladder 🪜  to ${finalPosition})`;
    } else if (finalPosition < newPosition) {
      output += ` (went down a snake 🐍 to ${finalPosition})`;
    }

    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;

    return {
      playerName: currentPlayer.name,
      diceValue: diceRoll,
      initialPosition: initialPosition,
      finalPosition: currentPlayer.position,
      message: output,
    };
  }

  isGameOver(): boolean {
    return this.players.some((player) => player.position === 100);
  }

  getWinner(): Player | null {
    return this.players.find((player) => player.position === 100) || null;
  }
}
