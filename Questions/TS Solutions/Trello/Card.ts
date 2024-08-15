import { User } from "./User";
import { v4 as uuidv4 } from "uuid";

export class Card {
  public id: string;
  public assignedUser: User | null = null;

  constructor(public name: string, public description: string = "") {
    this.id = uuidv4();
  }

  assignUser(user: User): void {
    this.assignedUser = user;
  }

  unassignUser(): void {
    this.assignedUser = null;
  }

  modifyAttributes(name?: string, description?: string): void {
    if (name) this.name = name;
    if (description) this.description = description;
  }
}
