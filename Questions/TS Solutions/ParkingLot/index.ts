import * as readlineSync from "readline-sync";
import { ParkingLotSystem } from "./ParkingLotSystem";

const parkingLotSystem = new ParkingLotSystem();

while (true) {
  const input = readlineSync.question("Enter command: ");
  if (input.toLowerCase() === "exit") {
    break;
  }

  const output = parkingLotSystem.executeCommand(input);
  console.log(output);
}

console.log("Exiting...");
