import { ParkingSlot } from "./ParkingSlot";
import { Vehicle } from "./Vehicle";

export class Ticket {
  constructor(
    public readonly id: string,
    public readonly slot: ParkingSlot,
    public readonly vehicle: Vehicle
  ) {}
}
