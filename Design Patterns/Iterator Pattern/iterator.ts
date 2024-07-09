// The below code demonstrates Iterator pattern.
// It defines a NumberCollection class that holds an array of numbers,
// and a NumberIterator class that provides methods to iterate over the collection.
// The iterator allows sequential access to the elements without exposing the underlying structure.

class NumberCollection {
  private numbers: number[] = [1, 2, 3, 4, 5];

  public getIterator(): NumberIterator {
    return new NumberIterator(this.numbers);
  }
}

class NumberIterator {
  private index: number = 0;

  constructor(private numbers: number[]) {}

  public hasNext(): boolean {
    return this.index < this.numbers.length;
  }

  public next(): number {
    return this.numbers[this.index++];
  }
}

// Usage
const collection = new NumberCollection();
const iterator = collection.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
