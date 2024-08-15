import * as readlineSync from "readline-sync";
import { ProjectManagementSystem } from "./ProjectManagementSystem";
import { Privacy } from "./Board";

const pms = new ProjectManagementSystem();

function handleCommand(command: string): void {
  const parts = command.split(" ");
  const action = parts[0];

  switch (action) {
    case "BOARD":
      handleBoardCommand(parts.slice(1));
      break;
    case "LIST":
      handleListCommand(parts.slice(1));
      break;
    case "CARD":
      handleCardCommand(parts.slice(1));
      break;
    case "SHOW":
      handleShowCommand(parts.slice(1));
      break;
    default:
      console.log("Invalid command");
  }
}

function handleBoardCommand(args: string[]): void {
  const subCommand = args[0];
  switch (subCommand) {
    case "CREATE":
      const boardId = pms.createBoard(args[1]);
      console.log(`Created board: ${boardId}`);
      break;
    case "DELETE":
      pms.deleteBoard(args[1]);
      console.log(`Deleted board: ${args[1]}`);
      break;
    case "ADD_MEMBER":
      // Assuming the board ID is args[1] and user ID is args[2]
      const board = pms.getBoard(args[1]);
      if (board) {
        board.addMember({
          userId: args[2],
          name: "Unknown",
          email: "unknown@example.com",
        });
        console.log(`Added member ${args[2]} to board ${args[1]}`);
      } else {
        console.log("Board not found");
      }
      break;
    case "REMOVE_MEMBER":
      // Assuming the board ID is args[1] and user ID is args[2]
      const boardToRemoveFrom = pms.getBoard(args[1]);
      if (boardToRemoveFrom) {
        boardToRemoveFrom.removeMember(args[2]);
        console.log(`Removed member ${args[2]} from board ${args[1]}`);
      } else {
        console.log("Board not found");
      }
      break;
    default:
      // Assuming args[0] is board ID and args[1] is attribute to modify
      const boardToModify = pms.getBoard(args[0]);
      if (boardToModify) {
        if (args[1] === "name") {
          boardToModify.modifyAttributes(args[2]);
        } else if (args[1] === "privacy") {
          boardToModify.modifyAttributes(undefined, args[2] as Privacy);
        }
        console.log(`Modified board ${args[0]}`);
      } else {
        console.log("Board not found");
      }
  }
}

function handleListCommand(args: string[]): void {
  const subCommand = args[0];
  switch (subCommand) {
    case "CREATE":
      const listId = pms.createList(args[1], args[2]);
      console.log(`Created list: ${listId}`);
      break;
    case "DELETE":
      pms.deleteList(args[1], args[2]);
      console.log(`Deleted list: ${args[2]} from board ${args[1]}`);
      break;
    default:
      // Assuming args[0] is board ID, args[1] is list ID, and args[2] is attribute to modify
      const board = pms.getBoard(args[0]);
      if (board) {
        const list = board.lists.find((l) => l.id === args[1]);
        if (list) {
          list.modifyAttributes(args[3]);
          console.log(`Modified list ${args[1]}`);
        } else {
          console.log("List not found");
        }
      } else {
        console.log("Board not found");
      }
  }
}

function handleCardCommand(args: string[]): void {
  const subCommand = args[0];
  switch (subCommand) {
    case "CREATE":
      const cardId = pms.createCard(args[1], args[2], args[3]);
      console.log(`Created card: ${cardId}`);
      break;
    case "DELETE":
      pms.deleteCard(args[1], args[2], args[3]);
      console.log(
        `Deleted card: ${args[3]} from list ${args[2]} in board ${args[1]}`
      );
      break;
    case "ASSIGN":
      pms.assignCard(args[1], args[2], args[3], args[4]);
      console.log(`Assigned card ${args[3]} to user ${args[4]}`);
      break;
    case "UNASSIGN":
      pms.unassignCard(args[1], args[2], args[3]);
      console.log(`Unassigned card ${args[3]}`);
      break;
    case "MOVE":
      pms.moveCard(args[1], args[2], args[3], args[4], args[5]);
      console.log(
        `Moved card ${args[3]} from list ${args[2]} to list ${args[5]}`
      );
      break;
    default:
      // Assuming args[0] is board ID, args[1] is list ID, args[2] is card ID, and args[3] is attribute to modify
      const board = pms.getBoard(args[0]);
      if (board) {
        const list = board.lists.find((l) => l.id === args[1]);
        if (list) {
          const card = list.cards.find((c) => c.id === args[2]);
          if (card) {
            if (args[3] === "name") {
              card.modifyAttributes(args[4]);
            } else if (args[3] === "description") {
              card.modifyAttributes(undefined, args[4]);
            }
            console.log(`Modified card ${args[2]}`);
          } else {
            console.log("Card not found");
          }
        } else {
          console.log("List not found");
        }
      } else {
        console.log("Board not found");
      }
  }
}

function handleShowCommand(args: string[]): void {
  switch (args[0]) {
    case "BOARD":
      console.log(pms.showBoard(args[1]));
      break;
    case "LIST":
      console.log(pms.showList(args[1], args[2]));
      break;
    case "CARD":
      console.log(pms.showCard(args[1], args[2], args[3]));
      break;
    default:
      console.log(pms.showAllBoards());
  }
}

function main() {
  console.log("Welcome to the Trello!");
  console.log('Enter commands (type "EXIT" to quit):');

  while (true) {
    const command = readlineSync.question("> ");
    if (command.toUpperCase() === "EXIT") {
      break;
    }
    handleCommand(command);
  }

  console.log("Thank you for using the Trello!");
}

main();
