"""
    Library Management System Low Level System Design - Python
"""

"""
REQUIREMENTS:

1. Books have the following type of Information:
    a) Book Name
    b) Book Author
    c) UniqueID
    d) Publication Date

2. There can be multiple copies of the same book (book items)

3. There are two types of users:
    a) L - Librarian
    b) M - Members of the Library
    Each user has a name, email, userType and a uniqueId

4. The Librarian has the following type of Methods:
    1. Add Books
    2. Delete Books
    3. Add Users
    4. Remove Users
    5. Search Books by Author
    6. Search Books by Title
    7. Search Books by Book's Unique ID
    8. Change Count of Books available in Library
    9. Checkout Books
    10. Renew Books
    11. Return Books

5. The Members of the Library has the following:
    1. Search Books by Author
    2. Search Books by Title
    3. Search Books by Book's Unique ID
    4. Checkout Books
    5. Renew Books
    6. Return Books

6. Limitations:
    1. Max books a member can have is 5
    2. A member can keep a single book for max 20 days
    3. Delay fine for users who return the books after the return date

"""



import uuid
from abc import ABC, abstractmethod


class Book:
    def __init__(self, name, author, pub_date, uniqueId = None, count = 0):
        self.name = name
        self.author = author
        self.pub_date = pub_date
        self.uniqueId = str((uuid.uuid4().int))[:10]
        self.count = 1


        print("Created a new Book: " + self.name + " " +
              self.author + " " + self.pub_date + " " + self.uniqueId)

    def printBookDetails(self):
        print("\nBook Details: ")
        print("Book Name: " + self.name)
        print("Author: " + self.author)
        print("Publication Date: " + self.pub_date)
        print("Unique ID: " + self.uniqueId)
        return

    def getName(self):
        return self.name

    def getAuthor(self):
        return self.author

    def getPubDate(self):
        return self.pub_date

    def getUniqueId(self):
        return self.uniqueId

    def fetchBookDetails(self):
        return {"Title": self.name, "Author": self.author, "PubDate": self.pub_date, "UID": self.uniqueId, "Count": self.count}


class BooksCatalog:
    def __init__(self):
        self.booksCatalog = {}

    def addBook(self, book):
        if book.uniqueId in self.booksCatalog:
            self.booksCatalog[book.uniqueId]['Count'] += 1
            self.booksCatalog[book.uniqueId]
            return
        else:
            self.booksCatalog[book.uniqueId] = book.fetchBookDetails()

    def getAllBooks(self):
        print("Books in BooksCatalog", len(self.booksCatalog))
        return self.booksCatalog

class User:
    def __init__(self, name=None, email=None, userType="M"):
        self.name = name
        self.email = email
        self.userType = userType
        self.uniqueId = str((uuid.uuid4().int))[:10]
        print("Created a new User: " + self.name + " " + self.email, " ", self.userType, " ", self.uniqueId)

    def getName(self):
        return self.name

    def getEmail(self):
        return self.email

    def getUserType(self):
        return self.userType

    def getUniqueId(self):
        return self.uniqueId

    def fetchUserDetails(self):
        return {"Name": self.name, "Email": self.email, "UserType": self.userType}

class UsersRepository:
    def __init__(self):
        self.usersRepository = {}

    def addUser(self, user):
        if user.uniqueId in self.usersRepository:
            print( "User already exists1")
        else:
            self.usersRepository[user.uniqueId] = user.fetchUserDetails()
            print("User Added successfully!")

    def getUserDetails(self, user):
        return user.fetchUserDetails()

    def getAllUsers(self):
        print("Users in UsersRepository", len(self.usersRepository))
        return self.usersRepository


library = BooksCatalog()
book1 = Book("The Power of Habit", "Charles Duhigg", "20/10/2000")
book2 = Book("Thousand Splendid Suns", "Khalid Hoessini", "2/1/2000")

library.addBook(book1)
library.addBook(book2)
library.addBook(book1)
library.addBook(book1)
library.addBook(book1)

print("", library.getAllBooks())

userRepo = UsersRepository()
user1 = User("Prince Yadav", "prince@gmail.com", "L")
user2 = User("Prince Yadav", "prince@gmail.com", "M")

userRepo.addUser(user1)
userRepo.addUser(user2)
userRepo.addUser(user1)

print("", userRepo.getAllUsers())

