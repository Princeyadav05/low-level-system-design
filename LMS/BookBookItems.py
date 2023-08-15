from abc import ABC, abstractmethod
from FunctionalRequirements import BookLending
from EnumsConstants import BookStatus

class Book(ABC):
    def __init__(self, ISBN, title, subject, publisher, language, pubDate):
        self.ISBN = ISBN
        self.title = title
        self.subject = subject
        self.publisher = publisher
        self.language = language
        self.authors = []
        self.pubDate = pubDate

class BookItem(Book):
    def __init__(self, barcode, is_reference_only, borrowed, due_date, price, book_format, status, pubDate, placed_at):
        self.barcode = barcode
        self.is_reference_only = is_reference_only
        self.borrowed = borrowed
        self.due_date = due_date
        self.price = price
        self.book_format = book_format
        self.status = status
        self.pubDate = pubDate
        self.placed_at = placed_at


    def update_bookItem_Status(status):
        status = status
        return None

    def update_dueDate(dueDate):
        due_date = dueDate

    def checkout(self, member_id):
        if self.get_is_reference_only():
            print("This book cannot be issued and is for reference only.")
            return False

        # checking if already lended the same book to the member
        if not BookLending.lendingBook(self.getBarcode, member_id):
            return False

        self.update_bookItem_Status(BookStatus.LOANED)
        return True


class Rack():
    def __init__(self, number, location_identifier):
        self.number = number
        self.location_identifier = location_identifier
