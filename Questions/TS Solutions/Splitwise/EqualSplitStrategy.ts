import { SplitStrategy } from "./SplitStrategy";
import { User } from "./User";
import { ExpenseSplit } from "./ExpenseSplit";

export class EqualSplitStrategy implements SplitStrategy {
  split(
    amount: number,
    participants: User[],
    shares: number[]
  ): ExpenseSplit[] {
    const splitAmount = +(amount / participants.length).toFixed(2);
    const remainingAmount = +(
      amount -
      splitAmount * (participants.length - 1)
    ).toFixed(2);

    return participants.map(
      (participant, index) =>
        new ExpenseSplit(
          participant,
          index === participants.length - 1 ? remainingAmount : splitAmount
        )
    );
  }
}
