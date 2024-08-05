export abstract class Vehicle {
  constructor(
    public readonly type: string,
    public readonly registrationNumber: string,
    public readonly color: string
  ) {}
}

export class Car extends Vehicle {
  constructor(registrationNumber: string, color: string) {
    super("CAR", registrationNumber, color);
  }
}

export class Bike extends Vehicle {
  constructor(registrationNumber: string, color: string) {
    super("BIKE", registrationNumber, color);
  }
}

export class Truck extends Vehicle {
  constructor(registrationNumber: string, color: string) {
    super("TRUCK", registrationNumber, color);
  }
}
