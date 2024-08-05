import { ParkingLot } from "../models/ParkingLot";

export interface Command {
  execute(parkingLot: ParkingLot, args: string[]): string;
}
