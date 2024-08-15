import { User } from "./User";
import { Board, Privacy } from "./Board";
import { List } from "./List";
import { Card } from "./Card";

export class ProjectManagementSystem {
  private boards: Board[] = [];
  private users: User[] = [];

  constructor() {
    // Initialize some users
    this.users.push(new User("user1", "John Doe", "john@example.com"));
    this.users.push(new User("user2", "Jane Smith", "jane@example.com"));
    this.users.push(new User("user3", "Bob Johnson", "bob@example.com"));
  }

  createBoard(name: string, privacy: Privacy = Privacy.PUBLIC): string {
    const board = new Board(name, privacy);
    this.boards.push(board);
    return board.id;
  }

  deleteBoard(boardId: string): void {
    this.boards = this.boards.filter((board) => board.id !== boardId);
  }

  getBoard(boardId: string): Board | undefined {
    return this.boards.find((board) => board.id === boardId);
  }

  createList(boardId: string, name: string): string | null {
    const board = this.getBoard(boardId);
    if (board) {
      const list = new List(name);
      board.addList(list);
      return list.id;
    }
    return null;
  }

  deleteList(boardId: string, listId: string): void {
    const board = this.getBoard(boardId);
    if (board) {
      board.removeList(listId);
    }
  }

  createCard(
    boardId: string,
    listId: string,
    name: string,
    description: string = ""
  ): string | null {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const card = new Card(name, description);
        list.addCard(card);
        return card.id;
      }
    }
    return null;
  }

  deleteCard(boardId: string, listId: string, cardId: string): void {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        list.removeCard(cardId);
      }
    }
  }

  assignCard(
    boardId: string,
    listId: string,
    cardId: string,
    userId: string
  ): void {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const card = list.cards.find((card) => card.id === cardId);
        const user = this.users.find((user) => user.userId === userId);
        if (card && user) {
          card.assignUser(user);
        }
      }
    }
  }

  unassignCard(boardId: string, listId: string, cardId: string): void {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const card = list.cards.find((card) => card.id === cardId);
        if (card) {
          card.unassignUser();
        }
      }
    }
  }

  moveCard(
    sourceBoardId: string,
    sourceListId: string,
    cardId: string,
    targetBoardId: string,
    targetListId: string
  ): void {
    const sourceBoard = this.getBoard(sourceBoardId);
    const targetBoard = this.getBoard(targetBoardId);
    if (sourceBoard && targetBoard) {
      const sourceList = sourceBoard.lists.find(
        (list) => list.id === sourceListId
      );
      const targetList = targetBoard.lists.find(
        (list) => list.id === targetListId
      );
      if (sourceList && targetList) {
        const cardIndex = sourceList.cards.findIndex(
          (card) => card.id === cardId
        );
        if (cardIndex !== -1) {
          const [card] = sourceList.cards.splice(cardIndex, 1);
          targetList.addCard(card);
        }
      }
    }
  }

  showAllBoards(): string {
    return JSON.stringify(this.boards, null, 2);
  }

  showBoard(boardId: string): string {
    const board = this.getBoard(boardId);
    return board ? JSON.stringify(board, null, 2) : "Board not found";
  }

  showList(boardId: string, listId: string): string {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      return list ? JSON.stringify(list, null, 2) : "List not found";
    }
    return "Board not found";
  }

  showCard(boardId: string, listId: string, cardId: string): string {
    const board = this.getBoard(boardId);
    if (board) {
      const list = board.lists.find((list) => list.id === listId);
      if (list) {
        const card = list.cards.find((card) => card.id === cardId);
        return card ? JSON.stringify(card, null, 2) : "Card not found";
      }
      return "List not found";
    }
    return "Board not found";
  }
}
