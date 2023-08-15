from abc import ABC, abstractmethod

class Search(ABC):
    def search_by_title():
        None

    def search_by_author():
        None

    def search_by_subject():
        None

    def search_by_pubDate():
        None

class Catalog(Search):
    def __init__(self):
        self.book_titles = {}
        self.book_authors = {}
        self.book_subjects = {}
        self.book_pubDates = {}

    def searchTitle(self, query):
        # Returns all book items which contains the string "query" in their title
        return self.book_titles.get(query)

    def searchAuthor(self, query):
        # Returns all book items which contains the string "query" in their author
        return self.book_authors.get(query)
    
    def searchSubject(self, query):
        # Returns all book items which contains the string "query" in their subject
        return self.book_subjects.get(query)

    def searchPubdate(self, query):
        # Returns all book items which contains the string "query" in their pubDate
        return self.book_pubDates.get(query)