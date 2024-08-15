import { User } from "./User";
import { List } from "./List";
import { v4 as uuidv4 } from "uuid";

export enum Privacy {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export class Board {
  public id: string;
  public url: string;
  public members: User[] = [];
  public lists: List[] = [];

  constructor(public name: string, public privacy: Privacy = Privacy.PUBLIC) {
    this.id = uuidv4();
    this.url = `https://trello-clone.com/board/${this.id}`;
  }

  addMember(user: User): void {
    this.members.push(user);
  }

  removeMember(userId: string): void {
    this.members = this.members.filter((member) => member.userId !== userId);
  }

  addList(list: List): void {
    this.lists.push(list);
  }

  removeList(listId: string): void {
    this.lists = this.lists.filter((list) => list.id !== listId);
  }

  modifyAttributes(name?: string, privacy?: Privacy): void {
    if (name) this.name = name;
    if (privacy) this.privacy = privacy;
  }
}
