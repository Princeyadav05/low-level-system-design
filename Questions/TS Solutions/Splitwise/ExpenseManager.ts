import { User } from "./User";
import { Expense, ExpenseType } from "./Expense";
import { ExpenseSplitFactory } from "./ExpenseSplitFactory";

export class ExpenseManager {
  private users: Map<string, User> = new Map();
  private expenses: Expense[] = [];
  private balances: Map<string, Map<string, number>> = new Map();

  addUser(user: User): void {
    this.users.set(user.userId, user);
    this.balances.set(user.userId, new Map());
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    const splitStrategy = ExpenseSplitFactory.createSplit(expense.expenseType);
    const splits = splitStrategy.split(
      expense.amount,
      expense.participants,
      expense.shares
    );

    splits.forEach((split) => {
      if (split.user.userId !== expense.paidBy.userId) {
        this.updateBalance(split.user, expense.paidBy, split.amount);
      }
    });
  }

  private updateBalance(fromUser: User, toUser: User, amount: number): void {
    const fromUserBalances = this.balances.get(fromUser.userId)!;
    const toUserBalances = this.balances.get(toUser.userId)!;

    fromUserBalances.set(
      toUser.userId,
      (fromUserBalances.get(toUser.userId) || 0) + amount
    );

    toUserBalances.set(
      fromUser.userId,
      (toUserBalances.get(fromUser.userId) || 0) - amount
    );
  }

  showBalances(): void {
    this.balances.forEach((userBalances, userId) => {
      userBalances.forEach((balance, otherUserId) => {
        if (balance > 0) {
          console.log(`${userId} owes ${otherUserId}: ${balance.toFixed(2)}`);
        }
      });
    });
  }

  showBalanceForUser(userId: string): void {
    const userBalances = this.balances.get(userId);
    if (!userBalances) {
      console.log("User not found");
      return;
    }

    let balancesFound = false;
    userBalances.forEach((balance, otherUserId) => {
      if (balance !== 0) {
        balancesFound = true;
        if (balance > 0) {
          console.log(`${userId} owes ${otherUserId}: ${balance.toFixed(2)}`);
        } else {
          console.log(
            `${otherUserId} owes ${userId}: ${Math.abs(balance).toFixed(2)}`
          );
        }
      }
    });

    if (!balancesFound) {
      console.log("No balances");
    }
  }

  getUser(userId: string): User | undefined {
    return this.users.get(userId);
  }
}
