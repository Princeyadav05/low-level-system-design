from BookMethods import BooksCatalogue, Book


class Library:
    books_catalog = BooksCatalogue();
    print("Library Books Catalogue:", books_catalog.get_all_books());

    book1 = Book("The Power of Habit", "Charles Duhigg", "20/10/2000")
    book2 = Book("Thousand Splendid Suns", "Khalid Hoessini", "2/1/2000")

    books_catalog.add_book(book1);
    books_catalog.add_book(book2);

    print("Library Books Catalogue:", books_catalog.get_all_books());


