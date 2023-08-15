from abc import ABC, abstractmethod
import datetime
import re
from BookBookItems import BookItem
from EnumsConstants import AccountStatus, BookStatus, Constants, ReservationStatus
from HelperFunctionClass import BookLending, BookReservation, Fine

class Account(ABC):
    def __init__(self, id, password, person, status=AccountStatus.ACTIVE):
        self.id = id
        self.password = password
        self.status = status
        self.person = person

    def resetPassword():
        None

class Librarian(Account):
    def __init__(self, id, password, person, status=AccountStatus.ACTIVE):
        super().__init__(id, password, person, status)

    def addBookItem():
        None

    def blockMember():
        None

    def unblockMember():
        None


class Member(Account):
    def __init__(self, id, password, person, status=AccountStatus.ACTIVE):
        super().__init__(id, password, person, status)
        self.membershipDate = datetime.date.today()
        self.totalBookCheckedout = 0

    def getTotalBooksCheckedout(self):
        return self.totalBookCheckedout

    def reserveBookItem(self, bookItem):
        None


    # check for Fine
    def checkFine(self, bookItemBarcode):
        bookLending = BookLending.fetchLendingDetails(bookItemBarcode)
        dueDate = BookLending.getDuedate()
        today = datetime.date.today

        # check if the book has been returned before due date
        if today > dueDate:
            difference = today - dueDate
            diffDays = difference.days
            Fine.collectFine(self.getMemberid, diffDays)

        

    

    # function to Checkout a Book
    def checkoutBookItem(self, bookItem):
        # check the number of books already lended to member
        if self.getTotalBooksCheckedout()>=Constants.MAXM_BOOK_ISSUED_TO_A_MEMBER:
            print("User has reached to maxm limit of books that can be lended")
            return False

        # check BookReservation
        bookReservation = BookReservation.fetchReservationdetails(bookItem.getBarcode())
        if bookReservation!=None and bookReservation.getMemberid()!=self.getMemberid():
            print("This book is reserved by some other member")

        elif bookReservation!=None:
            bookReservation.updateStatus(ReservationStatus.COMPLETED)
        
        # check if BookItem can be lended to this member
        if not BookItem.checkout(self.member_id):
            return False

        # If the above condition fails, it means that book can be lended
        self.totalBookCheckedout += 1
        return True




    # function to Return a Book
    def returnBook(self, bookItem):
        self.checkFine(bookItem.getBarcode())
        bookReservation = BookReservation.fetchReservationdetails(bookItem.getBarcode())

        if bookReservation!=None:
            bookItem.update_bookItem_Status(BookStatus.RESERVED)

        bookItem.update_bookItem_Status(BookStatus.AVAILABLE)




    # function to Renwew a Book
    def renewBook(self, bookItem):
        self.checkFine(bookItem.getBarcode())
        bookReservation = BookReservation.fetchReservationdetails(bookItem.getBarcode())

        # If book is reserved by some other member
        if bookReservation!=None and bookReservation.getMemberid()!=self.getMemberid():
            self.totalBookCheckedout-=1
            bookItem.update_bookItem_Status(BookStatus.RESERVED)
            return False

        # If book is reserved by the same member
        elif bookReservation!=None:
            bookReservation.updateStatus(ReservationStatus.COMPLETED)
        
        BookLending.lendingBook(bookItem.getBarcode(), self.getMemberid())
        bookItem.update_dueDate(datetime.datetime.now().AddDays(Constants.MAXM_LENDING_DAYS))
        return True












