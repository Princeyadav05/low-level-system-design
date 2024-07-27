import { Library } from "../Library";
import { Book } from "../models/Book";
import { Command } from "./Command";

export class AddBookCommand implements Command {
  execute(args: string[]): string {
    const [, bookId, title, authors, publishers, bookCopyIds] = args;
    const book = new Book(
      bookId,
      title,
      authors.split(","),
      publishers.split(",")
    );

    return Library.getInstance().addBook(book, bookCopyIds.split(","));
  }
}
