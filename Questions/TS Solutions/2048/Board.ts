import { Direction } from "./Direction";
import { Tile } from "./tile";

export class Board {
  private grid: Tile[][];

  constructor(private size: number = 4) {
    this.grid = this.createGrid();
    this.initializeBoard();
  }

  private createGrid(): Tile[][] {
    return Array(this.size)
      .fill(null)
      .map(() =>
        Array(this.size)
          .fill(null)
          .map(() => new Tile())
      );
  }

  private initializeBoard(): void {
    this.addRandomTile();
    this.addRandomTile();
  }

  private addRandomTile(): void {
    const availableCells = this.getAvailableCells();
    if (availableCells.length > 0) {
      const [row, col] =
        availableCells[Math.floor(Math.random() * availableCells.length)];
      this.grid[row][col].setValue(Math.random() < 0.5 ? 2 : 4);
    }
  }

  private getAvailableCells(): [number, number][] {
    const cells: [number, number][] = [];
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.grid[row][col].isEmpty()) {
          cells.push([row, col]);
        }
      }
    }
    return cells;
  }

  getGrid(): Tile[][] {
    return this.grid;
  }
}
