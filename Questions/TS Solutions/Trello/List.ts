import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";

export class List {
  public id: string;
  public cards: Card[] = [];

  constructor(public name: string) {
    this.id = uuidv4();
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  removeCard(cardId: string): void {
    this.cards = this.cards.filter((card) => card.id !== cardId);
  }

  modifyAttributes(name: string): void {
    this.name = name;
  }
}
