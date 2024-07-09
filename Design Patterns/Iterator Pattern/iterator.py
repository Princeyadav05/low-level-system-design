# This code shows the Iterator pattern.
# It defines a NumberCollection class that holds a list of numbers,
# and a NumberIterator class that provides methods to iterate over the collection.
# The iterator allows sequential access to the elements without exposing the underlying structure.

class NumberCollection:
    def __init__(self):
        self.numbers = [1, 2, 3, 4, 5]

    def get_iterator(self):
        return NumberIterator(self.numbers)

class NumberIterator:
    def __init__(self, numbers):
        self.numbers = numbers
        self.index = 0

    def has_next(self):
        return self.index < len(self.numbers)

    def next(self):
        if self.has_next():
            number = self.numbers[self.index]
            self.index += 1
            return number
        else:
            raise StopIteration()

# Usage
collection = NumberCollection()
iterator = collection.get_iterator()

while iterator.has_next():
    print(iterator.next())