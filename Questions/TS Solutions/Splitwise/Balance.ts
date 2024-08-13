import { User } from "./User";

export class Balance {
  constructor(
    public fromUser: User,
    public toUser: User,
    public amount: number
  ) {}

  updateBalance(amount: number): void {
    this.amount += amount;
  }
}
