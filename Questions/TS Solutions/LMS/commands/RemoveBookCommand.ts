import { Command } from "./Command";
import { Library } from "../Library";

export class RemoveBookCopyCommand implements Command {
  execute(args: string[]): string {
    const [, bookCopyId] = args;
    return Library.getInstance().removeBookCopy(bookCopyId);
  }
}
