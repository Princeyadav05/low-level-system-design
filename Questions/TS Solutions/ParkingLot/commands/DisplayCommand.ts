import { Command } from "./Command";
import { ParkingLot } from "../models/ParkingLot";
import { DisplayStrategy } from "../displays/DisplayStrategy";
import { FreeCountDisplay } from "../displays/FreeCountDisplay";
import { FreeSlotsDisplay } from "../displays/FreeSlotsDisplay";
import { OccupiedSlotsDisplay } from "../displays/OccupiedSlotsDisplay";

export class DisplayCommand implements Command {
  private strategies: { [key: string]: DisplayStrategy } = {
    free_count: new FreeCountDisplay(),
    free_slots: new FreeSlotsDisplay(),
    occupied_slots: new OccupiedSlotsDisplay(),
  };

  execute(parkingLot: ParkingLot, args: string[]): string {
    const [displayType, vehicleType] = args;
    const strategy = this.strategies[displayType];
    if (!strategy) {
      return `Invalid display type: ${displayType}`;
    }
    return strategy.display(parkingLot, vehicleType);
  }
}
