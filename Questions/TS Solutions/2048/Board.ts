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

  addRandomTile(): void {
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

  moveTiles(direction: Direction): boolean {
    let moved = false;
    const vector = this.getVector(direction);

    const range = [...Array(this.size).keys()];
    const rowOrder = vector[0] === 1 ? range.reverse() : range;
    const colOrder = vector[1] === 1 ? range.reverse() : range;

    console.log(`Direction: ${Direction[direction]}`);
    console.log("rowOrder:", rowOrder);
    console.log("colOrder:", colOrder);

    // First, move all tiles
    for (const row of rowOrder) {
      for (const col of colOrder) {
        const currentTile = this.grid[row][col];
        if (!currentTile.isEmpty()) {
          const [newRow, newCol] = this.findFarthestPosition(row, col, vector);
          if (newRow !== row || newCol !== col) {
            this.grid[newRow][newCol].setValue(currentTile.getValue());
            currentTile.setValue(0);
            moved = true;
          }
        }
      }
    }

    // Then, merge tiles
    moved = this.mergeTiles(vector, rowOrder, colOrder) || moved;

    return moved;
  }

  /**
   * Returns a vector representing the direction.
   * @param direction - The direction to get the vector for.
   * @returns The vector representing the direction.
   *
   * LEFT moves 0 rows and -1 column (left)
   * RIGHT moves 0 rows and 1 column (right)
   * UP moves -1 row and 0 columns (up)
   * DOWN moves 1 row and 0 columns (down)
   *
   * @throws {Error} If the direction is invalid.
   */
  private getVector(direction: Direction): [number, number] {
    switch (direction) {
      case Direction.LEFT:
        return [0, -1];
      case Direction.RIGHT:
        return [0, 1];
      case Direction.UP:
        return [-1, 0];
      case Direction.DOWN:
        return [1, 0];
      default:
        throw new Error("Invalid direction");
    }
  }

  private findFarthestPosition(
    row: number,
    col: number,
    vector: [number, number]
  ): [number, number] {
    let [nextRow, nextCol] = [row + vector[0], col + vector[1]];

    while (
      this.isWithinBounds(nextRow, nextCol) &&
      this.grid[nextRow][nextCol].isEmpty()
    ) {
      row = nextRow;
      col = nextCol;
      nextRow += vector[0];
      nextCol += vector[1];
    }

    return [row, col];
  }

  private isWithinBounds(row: number, col: number): boolean {
    return row >= 0 && row < this.size && col >= 0 && col < this.size;
  }

  private mergeTiles(
    vector: [number, number],
    rowOrder: number[],
    colOrder: number[]
  ): boolean {
    let merged = false;

    for (const row of rowOrder) {
      for (const col of colOrder) {
        const currentTile = this.grid[row][col];
        if (!currentTile.isEmpty()) {
          const [nextRow, nextCol] = [row + vector[0], col + vector[1]];
          if (this.isWithinBounds(nextRow, nextCol)) {
            const nextTile = this.grid[nextRow][nextCol];
            if (currentTile.getValue() === nextTile.getValue()) {
              nextTile.setValue(nextTile.getValue() * 2);
              currentTile.setValue(0);
              merged = true;
            }
          }
        }
      }
    }

    // Move tiles again after merging
    if (merged) {
      for (const row of rowOrder) {
        for (const col of colOrder) {
          const currentTile = this.grid[row][col];
          if (!currentTile.isEmpty()) {
            const [newRow, newCol] = this.findFarthestPosition(
              row,
              col,
              vector
            );
            if (newRow !== row || newCol !== col) {
              this.grid[newRow][newCol].setValue(currentTile.getValue());
              currentTile.setValue(0);
            }
          }
        }
      }
    }

    return merged;
  }

  isBoardFull(): boolean {
    return this.getAvailableCells().length === 0;
  }

  hasAdjacentEqualTiles(): boolean {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        const value = this.grid[row][col].getValue();
        if (value !== 0) {
          if (
            (row < this.size - 1 &&
              this.grid[row + 1][col].getValue() === value) ||
            (col < this.size - 1 &&
              this.grid[row][col + 1].getValue() === value)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
