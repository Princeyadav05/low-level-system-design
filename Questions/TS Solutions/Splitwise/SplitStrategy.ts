import { User } from "./User";
import { ExpenseSplit } from "./ExpenseSplit";

export interface SplitStrategy {
  split(amount: number, participants: User[], shares: number[]): ExpenseSplit[];
}
