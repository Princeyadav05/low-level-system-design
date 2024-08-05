import { ParkingSlot } from "../models/ParkingSlot";
import { Floor } from "../models/Floor";

export class ParkingSlotFactory {
  static createSlot(
    slotNumber: number,
    vehicleType: string,
    floor: Floor
  ): ParkingSlot {
    return new ParkingSlot(slotNumber, vehicleType, floor);
  }
}
