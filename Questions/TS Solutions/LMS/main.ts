import * as readlineSync from "readline-sync";
import { CommandProcessor } from "./CommandProcessor";

const commandProcessor = new CommandProcessor();

while (true) {
  const input = readlineSync.question("Enter Command: ");
  if (input.toLowerCase() === "exit") {
    break;
  }

  const output = commandProcessor.processCommand(input);
  console.log(output);
}
