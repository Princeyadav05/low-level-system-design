from enum import Enum
from abc import ABC, abstractmethod

class BookStatus(Enum):
    AVAILABLE, RESERVED, LOANED, LOST = 1, 2, 3, 4

class ReservationStatus(Enum):
    WAITING, PENDING, CANCELLED, COMPLETED, NONE = 1, 2, 3, 4, 5

class AccountStatus(Enum):
    ACTIVE, CLOSED, CANCELLED, BLACKLISTED, NONE = 1, 2, 3, 4, 5

class Address:
    def __init__(self, street, city, zip, country):
        self.street = street
        self.city = city
        self.zipCode = zip
        self.country = country

class Person(ABC):
    def __init__(self, name, Address, email, phone):
        self.name = name,
        self.Address = Address,
        self.email = email,
        self.phone = phone

class Constants:
    def __init__(self):
        self.MAXM_BOOK_ISSUED_TO_A_MEMBER = 5,
        self.MAXM_LENDING_DAYS = 15


        






