import { Vehicle, Car, Bike, Truck } from "../models/Vehicle";

export class VehicleFactory {
  static createVehicle(
    type: string,
    registrationNumber: string,
    color: string
  ): Vehicle {
    switch (type.toUpperCase()) {
      case "CAR":
        return new Car(registrationNumber, color);
      case "BIKE":
        return new Bike(registrationNumber, color);
      case "TRUCK":
        return new Truck(registrationNumber, color);
      default:
        throw new Error(`Invalid vehicle type: ${type}`);
    }
  }
}
