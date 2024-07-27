import { AddBookCommand } from "./commands/AddBookCommand";
import { BorrowBookCommand } from "./commands/BorrowBookCommand";
import { Command } from "./commands/Command";
import { CreateLibraryCommand } from "./commands/CreateLibraryCommand";
import { PrintBorrowedCommand } from "./commands/PrintBorrowedCommand";
import { RemoveBookCopyCommand } from "./commands/RemoveBookCommand";
import { ReturnBookCopyCommand } from "./commands/ReturnBookCopyCommand";
import { SearchBookCommand } from "./commands/SearchBookCommand";

export class CommandProcessor {
  private commands: Map<string, Command> = new Map();

  constructor() {
    this.commands.set("create_library", new CreateLibraryCommand());
    this.commands.set("add_book", new AddBookCommand());
    this.commands.set("search", new SearchBookCommand());
    this.commands.set("remove_book_copy", new RemoveBookCopyCommand());
    this.commands.set("borrow_book", new BorrowBookCommand());
    this.commands.set("return_book_copy", new ReturnBookCopyCommand());
    this.commands.set("print_borrowed", new PrintBorrowedCommand());
  }

  public processCommand(input: string): string {
    const args = this.parseInput(input);
    const commandName = args[0];

    const command = this.commands.get(commandName);
    if (command) {
      return command.execute(args);
    } else {
      return `Unknown Command: ${commandName}`;
    }
  }

  // To handle input with double quotes
  private parseInput(input: string): string[] {
    const args: string[] = [];
    let currentArg = "";
    let insideQuotes = false;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === '"') {
        insideQuotes = !insideQuotes;
      } else if (input[i] === " " && !insideQuotes) {
        if (currentArg) {
          args.push(currentArg);
          currentArg = "";
        }
      } else {
        currentArg += input[i];
      }
    }

    if (currentArg) {
      args.push(currentArg);
    }

    return args;
  }
}
