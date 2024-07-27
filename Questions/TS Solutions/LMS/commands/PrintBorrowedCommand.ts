import { Command } from "./Command";
import { Library } from "../Library";

export class PrintBorrowedCommand implements Command {
  execute(args: string[]): string {
    const [, userId] = args;
    return Library.getInstance().printBorrowed(userId);
  }
}
