# Library Management System
Command line based TypeScript implementation of a Library Management System with functionalities like adding books, borrowing, returning, and searching.

**Code Link**: [TypeScript](main.ts)

## How to Use

Install dependencies and Run the application:
    ```
    npm install && ts-node main.ts
    ```

## Low-Level Concepts Used

This Library Management System implementation utilizes several low-level design patterns and concepts:

1. **Singleton Pattern**: The `Library` class uses the Singleton pattern to ensure only one instance of the library exists.

2. **Repository Pattern**: Separate repository classes (`BookRepository`, `BookCopyRepository`, `UserRepository`) are used to manage data access for different entities.

3. **Strategy Pattern**: The `SearchStrategy` class encapsulates the search algorithm, allowing for easy modification or extension of search functionality.

4. **Command Pattern**: Each user command is treated as a separate command object, allowing for easy addition of new commands.

5. **Single Responsibility Principle**: Each class has a well-defined responsibility (e.g., `Library` orchestrates operations, repositories manage data access).

## Code Structure

* `Library.ts`: Main class that orchestrates the library operations.
* `BookRepository.ts`: Manages the collection of books.
* `BookCopyRepository.ts`: Manages the collection of book copies.
* `UserRepository.ts`: Manages the collection of users.
* `SearchStrategy.ts`: Implements the search functionality.
* `models/Book.ts`: Defines the `Book` class.
* `models/BookCopy.ts`: Defines the `BookCopy` class.
* `models/User.ts`: Defines the `User` class.
* `models/Rack.ts`: Defines the `Rack` class.
* `main.ts`: Entry point of the application, handles the command loop.

## Sample Input Commands
```
create_library central_library 20
add_book B001 "To Kill a Mockingbird" Harper_Lee J.B.Lippincott&Co. book_copy_1,book_copy_2
add_book B002 "1984" George_Orwell Secker&_Warburg book_copy_3,book_copy_4,book_copy_5
add_book B003 "Pride and Prejudice" Jane_Austen T._Egerton,Whitehall book_copy_6,book_copy_7
borrow_book B001 prince 2023-08-15
borrow_book B002 goku 2023-08-20
print_borrowed prince
search author George_Orwell
return_book_copy book_copy_1
remove_book_copy book_copy_5
exit
```