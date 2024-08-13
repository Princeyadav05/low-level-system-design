import { SplitStrategy } from "./SplitStrategy";
import { User } from "./User";
import { ExpenseSplit } from "./ExpenseSplit";

export class PercentSplitStrategy implements SplitStrategy {
  split(
    amount: number,
    participants: User[],
    shares: number[]
  ): ExpenseSplit[] {
    if (shares.reduce((a, b) => a + b, 0) !== 100) {
      throw new Error("The sum of percentages must be 100");
    }

    return participants.map((participant, index) => {
      const splitAmount = +((amount * shares[index]) / 100).toFixed(2);
      return new ExpenseSplit(participant, splitAmount);
    });
  }
}
