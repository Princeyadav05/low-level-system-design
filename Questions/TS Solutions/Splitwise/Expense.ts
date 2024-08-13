import { User } from "./User";

export enum ExpenseType {
  EQUAL = "EQUAL",
  EXACT = "EXACT",
  PERCENT = "PERCENT",
}

export class Expense {
  constructor(
    public paidBy: User,
    public amount: number,
    public participants: User[],
    public expenseType: ExpenseType,
    public shares: number[]
  ) {}
}
