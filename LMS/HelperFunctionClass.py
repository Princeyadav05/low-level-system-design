class BookReservation:
    def __init__(self, creationdate, status, barcode, memberid):
        self.creationdate = creationdate
        self.status = status
        self.barcode = barcode
        self.memberid = memberid

    def fetchReservationdetails(self, barcode):
        return None

    def updateStatus(self, status):
        return None


class BookLending:
    def __init__(self, creationdate, duedate, barcode, memberid):
        self.creationdate = creationdate
        self.duedate = duedate
        self.barcode = barcode
        self.memberid = memberid

    def lendingBook(self, barcode, memberid):
        None

    def fetchLendingDetails(self, barcode):
        None


class Fine:
    def __init__(self, creationdate, barcode, memberid):
        self.creationdate = creationdate
        self.barcode = barcode
        self.memberid = memberid

    def collectFine(self, memberid, days):
        None


        

