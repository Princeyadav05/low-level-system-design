import { Command } from "./Command";
import { ParkingLot } from "../models/ParkingLot";
import { VehicleFactory } from "../factories/VehicleFactory";

export class ParkVehicleCommand implements Command {
  execute(parkingLot: ParkingLot, args: string[]): string {
    const [vehicleType, registrationNumber, color] = args;
    const vehicle = VehicleFactory.createVehicle(
      vehicleType,
      registrationNumber,
      color
    );
    const ticket = parkingLot.parkVehicle(vehicle);
    return ticket
      ? `Parked vehicle. Ticket ID: ${ticket.id}`
      : "Parking Lot Full";
  }
}
