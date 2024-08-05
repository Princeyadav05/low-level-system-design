import { Vehicle } from "./Vehicle";
import { Floor } from "./Floor";

export class ParkingSlot {
  public isOccupied: boolean = false;
  private vehicle: Vehicle | null = null;

  constructor(
    public readonly slotNumber: number,
    public readonly vehicleType: string,
    public readonly floor: Floor
  ) {}

  public parkVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
    this.isOccupied = true;
  }

  public unparkVehicle(): Vehicle | null {
    const vehicle = this.vehicle;
    this.vehicle = null;
    this.isOccupied = false;
    return vehicle;
  }

  public getVehicle(): Vehicle | null {
    return this.vehicle;
  }
}
