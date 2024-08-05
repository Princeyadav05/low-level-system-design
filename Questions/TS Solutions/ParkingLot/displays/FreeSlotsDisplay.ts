import { DisplayStrategy } from "./DisplayStrategy";
import { ParkingLot } from "../models/ParkingLot";

export class FreeSlotsDisplay implements DisplayStrategy {
  display(parkingLot: ParkingLot, vehicleType: string): string {
    let result = "";
    parkingLot.getFloors().forEach((floor) => {
      const freeSlots = floor
        .getSlots()
        .filter((slot) => !slot.isOccupied && slot.vehicleType === vehicleType)
        .map((slot) => slot.slotNumber)
        .join(", ");
      result += `Free slots for ${vehicleType} on Floor ${floor.floorNumber}: ${freeSlots}\n`;
    });
    return result.trim();
  }
}
