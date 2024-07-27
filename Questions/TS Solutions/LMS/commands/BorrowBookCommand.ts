import { Command } from "./Command";
import { Library } from "../Library";

export class BorrowBookCommand implements Command {
  execute(args: string[]): string {
    const [, bookId, userId, dueDate] = args;
    return Library.getInstance().borrowBook(bookId, userId, dueDate);
  }
}
