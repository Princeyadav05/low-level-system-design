import { ExpenseType } from "./Expense";
import { SplitStrategy } from "./SplitStrategy";
import { EqualSplitStrategy } from "./EqualSplitStrategy";
import { ExactSplitStrategy } from "./ExactSplitStrategy";
import { PercentSplitStrategy } from "./PercentSplitStrategy";

export class ExpenseSplitFactory {
  static createSplit(expenseType: ExpenseType): SplitStrategy {
    switch (expenseType) {
      case ExpenseType.EQUAL:
        return new EqualSplitStrategy();
      case ExpenseType.EXACT:
        return new ExactSplitStrategy();
      case ExpenseType.PERCENT:
        return new PercentSplitStrategy();
      default:
        throw new Error("Invalid expense type");
    }
  }
}
