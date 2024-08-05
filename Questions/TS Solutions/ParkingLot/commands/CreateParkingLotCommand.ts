import { Command } from "./Command";
import { ParkingLot } from "../models/ParkingLot";
import { DefaultSlotAllocationStrategy } from "../strategies/SlotAllocationStrategy";

export class CreateParkingLotCommand implements Command {
  execute(parkingLot: ParkingLot, args: string[]): string {
    const [id, numFloors, slotsPerFloor] = args;
    ParkingLot.getInstance(
      id,
      parseInt(numFloors),
      parseInt(slotsPerFloor),
      new DefaultSlotAllocationStrategy()
    );
    return `Created parking lot with ${numFloors} floors and ${slotsPerFloor} slots per floor`;
  }
}
