interface TurnResult {
  playerName: string;
  diceValue: number;
  initialPosition: number;
  finalPosition: number;
  message: string;
}

export class OutputHandler {
  static printTurnResult(turnResult: TurnResult): void {
    console.log(turnResult.message);
  }

  static printWinner(playerName: string): void {
    console.log(`${playerName} wins the game`);
  }
}
