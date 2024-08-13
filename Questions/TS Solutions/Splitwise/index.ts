import * as readlineSync from "readline-sync";
import { User } from "./User";
import { Expense, ExpenseType } from "./Expense";
import { ExpenseManager } from "./ExpenseManager";

const expenseManager = new ExpenseManager();

// Initialize users
const users = [
  new User("u1", "User1", "user1@example.com", "1234567890"),
  new User("u2", "User2", "user2@example.com", "2345678901"),
  new User("u3", "User3", "user3@example.com", "3456789012"),
  new User("u4", "User4", "user4@example.com", "4567890123"),
];

users.forEach((user) => expenseManager.addUser(user));

function handleExpense(input: string): void {
  const [_, paidByUserId, amountStr, numUsersStr, ...rest] = input.split(" ");
  const amount = parseFloat(amountStr);
  const numUsers = parseInt(numUsersStr);

  const paidByUser = expenseManager.getUser(paidByUserId);
  if (!paidByUser) {
    console.log("Invalid user who paid");
    return;
  }

  const participants = rest.slice(0, numUsers).map((userId) => {
    const user = expenseManager.getUser(userId);
    if (!user) {
      throw new Error(`Invalid user: ${userId}`);
    }
    return user;
  });

  const expenseType = rest[numUsers] as ExpenseType;
  const shares = rest.slice(numUsers + 1).map(Number);

  const expense = new Expense(
    paidByUser,
    amount,
    participants,
    expenseType,
    shares
  );
  expenseManager.addExpense(expense);
}

function handleShow(input: string): void {
  const parts = input.split(" ");
  if (parts.length === 1) {
    expenseManager.showBalances();
  } else {
    expenseManager.showBalanceForUser(parts[1]);
  }
}

function main(): void {
  while (true) {
    const input = readlineSync.question("Enter command: ");
    if (input.toLowerCase() === "exit") {
      break;
    }

    try {
      if (input.startsWith("SHOW")) {
        handleShow(input);
      } else if (input.startsWith("EXPENSE")) {
        handleExpense(input);
      } else {
        console.log("Invalid command");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }
}

main();
