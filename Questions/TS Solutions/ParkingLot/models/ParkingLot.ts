import { Floor } from "./Floor";
import { Vehicle } from "./Vehicle";
import { Ticket } from "./Ticket";
import { SlotAllocationStrategy } from "../strategies/SlotAllocationStrategy";

export class ParkingLot {
  private static instance: ParkingLot;
  private floors: Floor[] = [];
  private slotAllocationStrategy: SlotAllocationStrategy;

  private constructor(
    public readonly id: string,
    numFloors: number,
    slotsPerFloor: number,
    strategy: SlotAllocationStrategy
  ) {
    this.slotAllocationStrategy = strategy;
    for (let i = 1; i <= numFloors; i++) {
      this.floors.push(new Floor(i, slotsPerFloor));
    }
  }

  public static getInstance(
    id: string,
    numFloors: number,
    slotsPerFloor: number,
    strategy: SlotAllocationStrategy
  ): ParkingLot {
    if (!ParkingLot.instance) {
      ParkingLot.instance = new ParkingLot(
        id,
        numFloors,
        slotsPerFloor,
        strategy
      );
    }
    return ParkingLot.instance;
  }

  public parkVehicle(vehicle: Vehicle): Ticket | null {
    const slot = this.slotAllocationStrategy.findSlot(
      this.floors,
      vehicle.type
    );
    if (slot) {
      slot.parkVehicle(vehicle);
      return new Ticket(
        `${this.id}_${slot.floor.floorNumber}_${slot.slotNumber}`,
        slot,
        vehicle
      );
    }
    return null;
  }

  public unparkVehicle(ticketId: string): Vehicle | null {
    const [, floorNum, slotNum] = ticketId.split("_");
    const floor = this.floors[parseInt(floorNum) - 1];
    const slot = floor.getSlot(parseInt(slotNum));
    if (slot && slot.isOccupied) {
      const vehicle = slot.unparkVehicle();
      return vehicle;
    }
    return null;
  }

  public getFloors(): Floor[] {
    return this.floors;
  }
}
