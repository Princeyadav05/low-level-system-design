import { Command } from "./Command";
import { ParkingLot } from "../models/ParkingLot";

export class UnparkVehicleCommand implements Command {
  execute(parkingLot: ParkingLot, args: string[]): string {
    const [ticketId] = args;
    const vehicle = parkingLot.unparkVehicle(ticketId);
    return vehicle
      ? `Unparked vehicle with Registration Number: ${vehicle.registrationNumber} and Color: ${vehicle.color}`
      : "Invalid Ticket";
  }
}
