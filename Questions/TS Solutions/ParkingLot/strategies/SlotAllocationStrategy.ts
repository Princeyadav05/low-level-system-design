import { Floor } from "../models/Floor";
import { ParkingSlot } from "../models/ParkingSlot";

export interface SlotAllocationStrategy {
  findSlot(floors: Floor[], vehicleType: string): ParkingSlot | null;
}

export class DefaultSlotAllocationStrategy implements SlotAllocationStrategy {
  findSlot(floors: Floor[], vehicleType: string): ParkingSlot | null {
    for (const floor of floors) {
      const slot = floor.getAvailableSlot(vehicleType);
      if (slot) return slot;
    }
    return null;
  }
}
