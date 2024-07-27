import { BookCopy } from "./../models/BookCopy";

export class BookCopyRepository {
  private bookCopies: Map<string, BookCopy> = new Map();

  addBookCopy(bookCopy: BookCopy): void {
    this.bookCopies.set(bookCopy.id, bookCopy);
  }

  getBookCopy(bookCopyId: string): BookCopy | undefined {
    return this.bookCopies.get(bookCopyId);
  }

  findAvailableBookCopy(bookId: string): BookCopy | null {
    for (const copy of this.bookCopies.values()) {
      if (copy.bookId === bookId && copy.rackNumber !== null) {
        return copy;
      }
    }
    return null;
  }

  getAllBookCopies(): BookCopy[] {
    return Array.from(this.bookCopies.values());
  }

  removeBookCopy(bookCopyId: string): boolean {
    return this.bookCopies.delete(bookCopyId);
  }
}
