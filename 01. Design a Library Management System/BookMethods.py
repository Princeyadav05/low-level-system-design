
import uuid


class Book:
    def __init__(self, name, author, pub_date):
        self.name = name
        self.author = author
        self.pub_date = pub_date
        self.unique_id = str((uuid.uuid4().int))[:10]
        self.count = 1

        print("Created a new Book: " + self.name + " " +
              self.author + " " + self.pub_date + " " + self.unique_id)


    '''This method return details of a book'''
    def fetch_book_details(self):
        return {"title": self.name, "author": self.author, "pub_date": self.pub_date, "UID": self.unique_id, "count": self.count}


class BooksCatalogue:
    def __init__(self):
        self.books_catalogue = []

    def search_title(self, name):
        for book in self.books_catalogue:
            if book['title'] == name:
                print(f'Book Title Found in Catalog: {book}')
                return book

        print(f'Book Title Not Found in Catalog: {name}')
        return False

    def add_book(self, new_book):
        print(dir(book))
        isBookInCatalog = self.search_title(new_book.name)
        print(isBookInCatalog)

        if isBookInCatalog:
            for book in self.books_catalogue:
                if book['title'] == new_book.name:
                    book['count'] += 1

            print(f'Book Already Available.')
        else:
            # Add the book to the Book Catalogue
            self.books_catalogue.append(new_book.fetch_book_details())
            print(f'Added Book: {self.books_catalogue}')


    def get_all_books(self):
        print("Books in BooksCatalogue", len(self.books_catalogue))
        return self.books_catalogue