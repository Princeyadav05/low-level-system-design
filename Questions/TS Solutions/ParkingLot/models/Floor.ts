import { ParkingSlot } from "./ParkingSlot";
import { ParkingSlotFactory } from "../factories/ParkingSlotFactory";

export class Floor {
  private slots: ParkingSlot[] = [];

  /**
   *  The first slot on each floor will be for a truck,
   * the next 2 for bikes,
   * and all the other slots for cars.
   */
  constructor(public readonly floorNumber: number, numSlots: number) {
    for (let i = 1; i <= numSlots; i++) {
      if (i === 1) {
        this.slots.push(ParkingSlotFactory.createSlot(i, "TRUCK", this));
      } else if (i <= 3) {
        this.slots.push(ParkingSlotFactory.createSlot(i, "BIKE", this));
      } else {
        this.slots.push(ParkingSlotFactory.createSlot(i, "CAR", this));
      }
    }
  }

  public getAvailableSlot(vehicleType: string): ParkingSlot | null {
    return (
      this.slots.find(
        (slot) => !slot.isOccupied && slot.vehicleType === vehicleType
      ) || null
    );
  }

  public getSlot(slotNumber: number): ParkingSlot | undefined {
    return this.slots.find((slot) => slot.slotNumber === slotNumber);
  }

  public getSlots(): ParkingSlot[] {
    return this.slots;
  }
}
