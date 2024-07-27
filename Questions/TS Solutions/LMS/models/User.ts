export class User {
  public borrowedBooks: Set<string> = new Set();

  constructor(public id: string, public name: string) {}

  canBorrowMore(): boolean {
    return this.borrowedBooks.size < 5;
  }
}
