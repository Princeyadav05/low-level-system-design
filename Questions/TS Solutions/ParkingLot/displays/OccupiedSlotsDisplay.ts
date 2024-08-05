import { DisplayStrategy } from "./DisplayStrategy";
import { ParkingLot } from "../models/ParkingLot";

export class OccupiedSlotsDisplay implements DisplayStrategy {
  display(parkingLot: ParkingLot, vehicleType: string): string {
    let result = "";
    parkingLot.getFloors().forEach((floor) => {
      const occupiedSlots = floor
        .getSlots()
        .filter((slot) => slot.isOccupied && slot.vehicleType === vehicleType)
        .map((slot) => slot.slotNumber)
        .join(", ");
      result += `Occupied slots for ${vehicleType} on Floor ${floor.floorNumber}: ${occupiedSlots}\n`;
    });
    return result.trim();
  }
}
