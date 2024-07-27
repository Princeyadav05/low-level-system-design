import { Book } from "./models/Book";
import { User } from "./models/User";
import { Rack } from "./models/Rack";
import { BookCopy } from "./models/BookCopy";
import { BookRepository } from "./repositories/BookRepository";
import { BookCopyRepository } from "./repositories/BookCopyRepository";
import { UserRepository } from "./repositories/UserRepository";
import { SearchStrategy } from "./strategies/SearchStrategy";

export class Library {
  private static instance: Library;
  private bookRepository: BookRepository;
  private bookCopyRepository: BookCopyRepository;
  private userRepository: UserRepository;
  private searchStrategy: SearchStrategy;
  private racks: Rack[] = [];
  private id!: string;

  private constructor() {
    this.bookRepository = new BookRepository();
    this.bookCopyRepository = new BookCopyRepository();
    this.userRepository = new UserRepository();
    this.searchStrategy = new SearchStrategy(
      this.bookRepository,
      this.bookCopyRepository
    );
  }

  public static getInstance(): Library {
    if (!Library.instance) {
      Library.instance = new Library();
    }
    return Library.instance;
  }

  public createLibrary(id: string, numberOfRacks: number): string {
    this.id = id;
    this.racks = Array.from(
      { length: numberOfRacks },
      (_, i) => new Rack(i + 1)
    );
    return `Created library: ${id} with ${numberOfRacks} racks`;
  }

  public addBook(book: Book, bookCopyIds: string[]): string {
    this.bookRepository.addBook(book);
    const addedRacks: number[] = [];

    for (const copyId of bookCopyIds) {
      const bookCopy = new BookCopy(copyId, book.id);
      const availableRack = this.findAvailableRack();
      if (availableRack) {
        availableRack.bookCopyId = copyId;
        bookCopy.rackNumber = availableRack.number;
        this.bookCopyRepository.addBookCopy(bookCopy);
        addedRacks.push(availableRack.number);
      } else {
        return "Rack not available";
      }
    }

    return `Added Book to racks: ${addedRacks.join(",")}`;
  }

  public borrowBook(bookId: string, userId: string, dueDate: string): string {
    const user = this.userRepository.getUser(userId);
    if (!user) {
      return "Invalid User ID";
    }

    if (!user.canBorrowMore()) {
      return "Overlimit";
    }

    const availableBookCopy =
      this.bookCopyRepository.findAvailableBookCopy(bookId);
    if (!availableBookCopy) {
      return "Not available";
    }

    return this.borrowBookCopy(availableBookCopy.id, userId, dueDate);
  }

  public borrowBookCopy(
    bookCopyId: string,
    userId: string,
    dueDate: string
  ): string {
    const bookCopy = this.bookCopyRepository.getBookCopy(bookCopyId);
    if (!bookCopy || bookCopy.rackNumber === null) {
      return "Invalid Book Copy ID";
    }

    const user = this.userRepository.getUser(userId);
    if (!user) {
      return "Invalid User ID";
    }

    if (!user.canBorrowMore()) {
      return "Overlimit";
    }

    const rack = this.racks[bookCopy.rackNumber - 1];
    rack.bookCopyId = null;

    bookCopy.borrowedBy = userId;
    bookCopy.dueDate = dueDate;
    const rackNumber = bookCopy.rackNumber;
    bookCopy.rackNumber = null;

    user.borrowedBooks.add(bookCopyId);

    return `Borrowed Book from rack: ${rackNumber}`;
  }

  public returnBookCopy(bookCopyId: string): string {
    const bookCopy = this.bookCopyRepository.getBookCopy(bookCopyId);
    if (!bookCopy) {
      return "Invalid Book Copy ID";
    }

    if (!bookCopy.borrowedBy) {
      return "This book copy is not borrowed";
    }

    const user = this.userRepository.getUser(bookCopy.borrowedBy);
    if (user) {
      user.borrowedBooks.delete(bookCopyId);
    }

    const availableRack = this.findAvailableRack();
    if (!availableRack) {
      return "No available rack to return the book";
    }

    availableRack.bookCopyId = bookCopyId;
    bookCopy.rackNumber = availableRack.number;
    bookCopy.borrowedBy = null;
    bookCopy.dueDate = null;

    return `Returned book copy ${bookCopyId} and added to rack: ${availableRack.number}`;
  }

  public printBorrowed(userId: string): string {
    const user = this.userRepository.getUser(userId);
    if (!user || user.borrowedBooks.size === 0) {
      return "";
    }

    const borrowedBooks = Array.from(user.borrowedBooks)
      .map((copyId) => {
        const copy = this.bookCopyRepository.getBookCopy(copyId);
        return copy ? `Book Copy: ${copy.id} ${copy.dueDate}` : null;
      })
      .filter(Boolean)
      .sort();

    return borrowedBooks.join("\n");
  }

  public search(attribute: string, value: string): string {
    return this.searchStrategy.search(attribute, value);
  }

  public removeBookCopy(bookCopyId: string): string {
    const bookCopy = this.bookCopyRepository.getBookCopy(bookCopyId);
    if (!bookCopy || bookCopy.rackNumber === null) {
      return "Invalid Book Copy ID";
    }

    const rack = this.racks[bookCopy.rackNumber - 1];
    rack.bookCopyId = null;
    this.bookCopyRepository.removeBookCopy(bookCopyId);

    return `Removed book copy: ${bookCopyId} from rack: ${bookCopy.rackNumber}`;
  }

  private findAvailableRack(): Rack | null {
    return this.racks.find((rack) => rack.bookCopyId === null) || null;
  }
}
