import { Book } from "./../models/Book";

export class BookRepository {
  private books: Map<string, Book> = new Map();

  addBook(book: Book): void {
    this.books.set(book.id, book);
  }

  getBook(bookId: string): Book | undefined {
    return this.books.get(bookId);
  }

  getAllBooks(): Book[] {
    return Array.from(this.books.values());
  }
}
