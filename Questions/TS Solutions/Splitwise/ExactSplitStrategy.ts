import { SplitStrategy } from "./SplitStrategy";
import { User } from "./User";
import { ExpenseSplit } from "./ExpenseSplit";

export class ExactSplitStrategy implements SplitStrategy {
  split(
    amount: number,
    participants: User[],
    shares: number[]
  ): ExpenseSplit[] {
    if (shares.reduce((a, b) => a + b, 0) !== amount) {
      throw new Error("The sum of shares does not equal the total amount");
    }

    return participants.map(
      (participant, index) => new ExpenseSplit(participant, shares[index])
    );
  }
}
