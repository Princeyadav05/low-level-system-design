export class Board {
  private grid: string[][];

  constructor() {
    this.grid = Array(3)
      .fill(null)
      .map(() => Array(3).fill("-"));
  }

  makeMove(row: number, col: number, piece: string): boolean {
    if (this.isValidMode(row, col)) {
      this.grid[row][col] = piece;
      return true;
    }

    return false;
  }

  isValidMode(row: number, col: number): boolean {
    return (
      row >= 0 && row < 3 && col >= 0 && col < 3 && this.grid[row][col] === "-"
    );
  }

  isFull(): boolean {
    for (let row of this.grid) {
      for (let cell of row) {
        if (cell === "-") {
          return false;
        }
      }
    }
    return true;
  }

  printBoard(): void {
    this.grid.forEach((row) => console.log(row.join(" ")));
  }

  getGrid(): string[][] {
    return this.grid;
  }
}
