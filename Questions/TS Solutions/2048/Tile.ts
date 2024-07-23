export class Tile {
  constructor(public value: number = 0) {}

  getValue(): number {
    return this.value;
  }

  setValue(value: number) {
    this.value = value;
  }

  isEmpty(): boolean {
    return this.value === 0;
  }
}
