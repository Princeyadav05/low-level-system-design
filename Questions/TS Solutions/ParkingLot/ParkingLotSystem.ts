import { Command } from "./commands/Command";
import { CreateParkingLotCommand } from "./commands/CreateParkingLotCommand";
import { DisplayCommand } from "./commands/DisplayCommand";
import { ParkVehicleCommand } from "./commands/ParkVehicleCommand";
import { UnparkVehicleCommand } from "./commands/UnparkVehicleCommand";
import { ParkingLot } from "./models/ParkingLot";
import { DefaultSlotAllocationStrategy } from "./strategies/SlotAllocationStrategy";

export class ParkingLotSystem {
  private parkingLot: ParkingLot | null = null;

  private commands: { [key: string]: Command } = {
    create_parking_lot: new CreateParkingLotCommand(),
    park_vehicle: new ParkVehicleCommand(),
    unpark_vehicle: new UnparkVehicleCommand(),
    display: new DisplayCommand(),
  };

  public executeCommand(inputLine: string): string {
    const [command, ...args] = inputLine.split(" ");
    if (command === "create_parking_lot") {
      this.parkingLot = ParkingLot.getInstance(
        args[0],
        parseInt(args[1]),
        parseInt(args[2]),
        new DefaultSlotAllocationStrategy()
      );
    }

    if (!this.parkingLot && command !== "create_parking_lot") {
      return "Parking lot not created yet.";
    }

    const commandExecutor = this.commands[command];

    if (!commandExecutor) {
      return `Invalid command: ${command}`;
    }

    return commandExecutor.execute(this.parkingLot!, args);
  }
}
