import { BookRepository } from "./../repositories/BookRepository";
import { BookCopyRepository } from "./../repositories/BookCopyRepository";

export class SearchStrategy {
  constructor(
    private bookRepository: BookRepository,
    private bookCopyRepository: BookCopyRepository
  ) {}

  search(attribute: string, value: string): string {
    const results: string[] = [];

    this.bookCopyRepository.getAllBookCopies().forEach((copy) => {
      const book = this.bookRepository.getBook(copy.bookId);
      if (book) {
        if (
          (attribute === "book_id" && book.id === value) ||
          (attribute === "author" && book.authors.includes(value)) ||
          (attribute === "publisher" && book.publishers.includes(value))
        ) {
          const result = `Book Copy: ${copy.id} ${book.id} ${
            book.title
          } ${book.authors.join(",")} ${book.publishers.join(",")} ${
            copy.rackNumber || -1
          }${copy.borrowedBy ? ` ${copy.borrowedBy} ${copy.dueDate}` : ""}`;
          results.push(result);
        }
      }
    });

    return results
      .sort((a, b) => {
        const rackA = parseInt(a.split(" ")[7]);
        const rackB = parseInt(b.split(" ")[7]);
        return rackA - rackB;
      })
      .join("\n");
  }
}
