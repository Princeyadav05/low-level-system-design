import * as readlineSync from "readline-sync";
import { CommandHandlers } from "./commandHandlers";
import { KeyValueStore } from "./KeyValueStore";

async function main() {
  const store = new KeyValueStore();
  const handlers = new CommandHandlers(store);

  while (true) {
    const input = readlineSync.question("");
    const [command, ...args] = input.split(" ");

    switch (command) {
      case "get":
        await handlers.handleGet(args[0]);
        break;
      case "put":
        await handlers.handlePut(args);
        break;
      case "delete":
        await handlers.handleDelete(args[0]);
        break;
      case "search":
        await handlers.handleSearch(args[0], args[1]);
        break;
      case "keys":
        await handlers.handleKeys();
        break;
      case "exit":
        return;
      default:
        console.log("Invalid Command");
    }
  }
}

main().catch(console.error);
