export class BookCopy {
  public rackNumber: number | null = null;
  public borrowedBy: string | null = null;
  public dueDate: string | null = null;

  constructor(public id: string, public bookId: string) {}
}
