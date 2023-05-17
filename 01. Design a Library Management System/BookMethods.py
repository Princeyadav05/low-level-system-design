
import uuid


class Book:
    def __init__(self, name, author, pub_date, unique_id=None, count=0):
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
        self.books_catalogue = {}

    def add_book(self, book):
        if book.unique_id in self.books_catalogue:
            self.books_catalogue[book.unique_id]['count'] += 1
            print(f'Book Already Available. Increasing count: {self.books_catalogue[book.unique_id]}')
        else:
            # Add the book to the Book Catalogue
            self.books_catalogue[book.unique_id] =  book.fetch_book_details()
            print(f'Added Book: {self.books_catalogue[book.unique_id]}')

    def get_all_books(self):
        print("Books in BooksCatalogue", len(self.books_catalogue))
        return self.books_catalogue