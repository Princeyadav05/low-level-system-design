import { Command } from "./Command";
import { Library } from "../Library";

export class ReturnBookCopyCommand implements Command {
  execute(args: string[]): string {
    const [, bookCopyId] = args;
    return Library.getInstance().returnBookCopy(bookCopyId);
  }
}
