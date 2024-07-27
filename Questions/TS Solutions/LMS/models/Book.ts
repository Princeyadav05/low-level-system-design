export class Book {
  constructor(
    public id: string,
    public title: string,
    public authors: string[],
    public publishers: string[]
  ) {}
}
