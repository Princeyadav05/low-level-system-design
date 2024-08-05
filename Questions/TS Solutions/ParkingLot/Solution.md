# Parking Lot Management System
Command line based TypeScript implementation of a Parking Lot Management System with functionalities like creating a parking lot, parking vehicles, unparking vehicles, and displaying parking status.

**Code Link**: [TypeScript](index.ts)

## How to Use

Install dependencies and Run the application: ```npm install && npm start```

## Low-Level Concepts Used

This Parking Lot Management System implementation utilizes several low-level design patterns and concepts:

1. **Singleton Pattern**: The `ParkingLot` class uses the Singleton pattern to ensure only one instance of the parking lot exists.
2. **Factory Pattern**: `VehicleFactory` and `ParkingSlotFactory` are used to create vehicles and parking slots, respectively.
3. **Strategy Pattern**: `SlotAllocationStrategy` allows for different slot allocation strategies to be implemented and easily swapped.
4. **Command Pattern**: Each user command (create parking lot, park vehicle, etc.) is treated as a separate command object, allowing for easy addition of new commands.
6. **Single Responsibility Principle**: Each class has a well-defined responsibility (e.g., `ParkingLot` manages overall operations, `Floor` manages slots on a single floor).

## Code Structure

* `src/models/ParkingLot.ts`: Main class that manages the parking lot operations.
* `src/models/Floor.ts`: Manages the collection of parking slots on a floor.
* `src/models/ParkingSlot.ts`: Represents a single parking slot.
* `src/models/Vehicle.ts`: Defines the `Vehicle` class and its subclasses.
* `src/models/Ticket.ts`: Represents a parking ticket.
* `src/strategies/SlotAllocationStrategy.ts`: Implements the slot allocation strategy.
* `src/factories/VehicleFactory.ts`: Factory for creating different types of vehicles.
* `src/factories/ParkingSlotFactory.ts`: Factory for creating parking slots.
* `src/commands/`: Contains command classes for different operations.
* `src/displays/`: Contains display strategy classes for different types of displays.
* `src/ParkingLotSystem.ts`: Orchestrates the overall parking lot system.
* `src/index.ts`: Entry point of the application, handles the command loop.

## Sample Input and Output

```
ts-node ParkingLot/index.ts
Enter command: create_parking_lot PR1234 2 6
Created parking lot with 2 floors and 6 slots per floor
Enter command: display free_count CAR
No. of free slots for CAR on Floor 1: 3
No. of free slots for CAR on Floor 2: 3
Enter command: display free_count BIKE
No. of free slots for BIKE on Floor 1: 2
No. of free slots for BIKE on Floor 2: 2
Enter command: display free_count TRUCK
No. of free slots for TRUCK on Floor 1: 1
No. of free slots for TRUCK on Floor 2: 1
Enter command: display occupied_slots CAR
Occupied slots for CAR on Floor 1: 
Occupied slots for CAR on Floor 2:
Enter command: display occupied_slots CAR
Occupied slots for CAR on Floor 1: 
Occupied slots for CAR on Floor 2:
Enter command: display occupied_slots BIKE
Occupied slots for BIKE on Floor 1: 
Occupied slots for BIKE on Floor 2:
Enter command: display free_slots CAR
Free slots for CAR on Floor 1: 4, 5, 6
Free slots for CAR on Floor 2: 4, 5, 6
Enter command: display free_slots BIKE
Free slots for BIKE on Floor 1: 2, 3
Free slots for BIKE on Floor 2: 2, 3
Enter command: display free_slots TRUCK
Free slots for TRUCK on Floor 1: 1
Free slots for TRUCK on Floor 2: 1
Enter command: park_vehicle CAR KA-01-DB-1234 black
Parked vehicle. Ticket ID: PR1234_1_4
Enter command: park_vehicle CAR KA-02-CB-1334 red
Parked vehicle. Ticket ID: PR1234_1_5
Enter command: park_vehicle CAR KA-01-DB-1133 black
Parked vehicle. Ticket ID: PR1234_1_6
Enter command: park_vehicle CAR KA-05-HJ-8432 white
Parked vehicle. Ticket ID: PR1234_2_4
Enter command: park_vehicle CAR WB-45-HO-9032 white
Parked vehicle. Ticket ID: PR1234_2_5
Enter command: park_vehicle CAR KA-01-DF-8230 black
Parked vehicle. Ticket ID: PR1234_2_6
Enter command: park_vehicle CAR KA-21-HS-2347 red
Parking Lot Full
Enter command: display free_count CAR
No. of free slots for CAR on Floor 1: 0
No. of free slots for CAR on Floor 2: 0
Enter command: display free_count BIKE
No. of free slots for BIKE on Floor 1: 2
No. of free slots for BIKE on Floor 2: 2
Enter command: display free_count TRUCK
No. of free slots for TRUCK on Floor 1: 1
No. of free slots for TRUCK on Floor 2: 1
Enter command: unpark_vehicle PR1234_2_5
Unparked vehicle with Registration Number: WB-45-HO-9032 and Color: white
Enter command: unpark_vehicle PR1234_2_5
Invalid Ticket
Enter command: unpark_vehicle PR1234_2_7
Invalid Ticket
Enter command: display free_count CAR
No. of free slots for CAR on Floor 1: 0
No. of free slots for CAR on Floor 2: 1
Enter command: display free_count BIKE
No. of free slots for BIKE on Floor 1: 2
No. of free slots for BIKE on Floor 2: 2
Enter command: display free_count TRUCK
No. of free slots for TRUCK on Floor 1: 1
No. of free slots for TRUCK on Floor 2: 1
Enter command: display free_slots CAR
Free slots for CAR on Floor 1: 
Free slots for CAR on Floor 2: 5
Enter command: display free_slots BIKE
Free slots for BIKE on Floor 1: 2, 3
Free slots for BIKE on Floor 2: 2, 3
Enter command: display free_slots TRUCK
Free slots for TRUCK on Floor 1: 1
Free slots for TRUCK on Floor 2: 1
Enter command: display occupied_slots CAR
Occupied slots for CAR on Floor 1: 4, 5, 6
Occupied slots for CAR on Floor 2: 4, 6
Enter command: display occupied_slots BIKE
Occupied slots for BIKE on Floor 1: 
Occupied slots for BIKE on Floor 2:
Enter command: display occupied_slots TRUCK
Occupied slots for TRUCK on Floor 1: 
Occupied slots for TRUCK on Floor 2:
Enter command: park_vehicle BIKE KA-01-DB-1541 black
Parked vehicle. Ticket ID: PR1234_1_2
Enter command: park_vehicle TRUCK KA-32-SJ-5389 orange
Parked vehicle. Ticket ID: PR1234_1_1
Enter command: park_vehicle TRUCK KL-54-DN-4582 green
Parked vehicle. Ticket ID: PR1234_2_1
Enter command: park_vehicle TRUCK KL-12-HF-4542 green
Parking Lot Full
Enter command: display free_count CAR
No. of free slots for CAR on Floor 1: 0
No. of free slots for CAR on Floor 2: 1
Enter command: display free_count BIKE
No. of free slots for BIKE on Floor 1: 1
No. of free slots for BIKE on Floor 2: 2
Enter command: display free_count TRUCK
No. of free slots for TRUCK on Floor 1: 0
No. of free slots for TRUCK on Floor 2: 0
Enter command: display free_slots CAR
Free slots for CAR on Floor 1: 
Free slots for CAR on Floor 2: 5
Enter command: display free_slots BIKE
Free slots for BIKE on Floor 1: 3
Free slots for BIKE on Floor 2: 2, 3
Enter command: display free_slots TRUCK
Free slots for TRUCK on Floor 1: 
Free slots for TRUCK on Floor 2:
Enter command: display occupied_slots CAR
Occupied slots for CAR on Floor 1: 4, 5, 6
Occupied slots for CAR on Floor 2: 4, 6
Enter command: display occupied_slots BIKE
Occupied slots for BIKE on Floor 1: 2
Occupied slots for BIKE on Floor 2:
Enter command: display occupied_slots TRUCK
Occupied slots for TRUCK on Floor 1: 1
Occupied slots for TRUCK on Floor 2: 1
Enter command: exit
Exiting...
```