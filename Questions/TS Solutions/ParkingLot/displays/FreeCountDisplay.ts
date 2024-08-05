import { DisplayStrategy } from "./DisplayStrategy";
import { ParkingLot } from "../models/ParkingLot";

export class FreeCountDisplay implements DisplayStrategy {
  display(parkingLot: ParkingLot, vehicleType: string): string {
    let result = "";
    parkingLot.getFloors().forEach((floor) => {
      const freeCount = floor
        .getSlots()
        .filter(
          (slot) => !slot.isOccupied && slot.vehicleType === vehicleType
        ).length;
      result += `No. of free slots for ${vehicleType} on Floor ${floor.floorNumber}: ${freeCount}\n`;
    });
    return result.trim();
  }
}
