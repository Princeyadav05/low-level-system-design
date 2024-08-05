import { ParkingLot } from "../models/ParkingLot";

export interface DisplayStrategy {
  display(parkingLot: ParkingLot, vehicleType: string): string;
}
