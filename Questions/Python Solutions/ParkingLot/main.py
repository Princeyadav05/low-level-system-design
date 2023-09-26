from enum import Enum
from datetime import datetime

class VehicleType(Enum):
    CAR = "CAR"
    BIKE = "BIKE"
    TRUCK = "TRUCK"

class Vehicle:
    def __init__(self, vehicle_type, registration_number, color):
        self.vehicle_type = vehicle_type
        self.registration_number = registration_number
        self.color = color

class Ticket:
    def __init__(self, parking_lot_id, floor_number, slot_number, vehicle):
        self.ticket_id = self.generate_ticket_id(parking_lot_id, floor_number, slot_number)
        self.vehicle = vehicle
        self.parking_spot = None
        self.entry_time = datetime.now()  # Entry time when the vehicle is parked

    @staticmethod
    def generate_ticket_id(parking_lot_id, floor_number, slot_number):
        return f"{parking_lot_id}_{floor_number}_{slot_number}"

class ParkingSlot:
    def __init__(self, slot_number, vehicle=None):
        self.slot_number = slot_number
        self.vehicle = vehicle

    def occupy(self, vehicle):
        self.vehicle = vehicle

    def vacate(self):
        self.vehicle = None

class ParkingFloor:
    def __init__(self, floor_number, slots_per_floor):
        self.floor_number = floor_number
        self.slots = [ParkingSlot(slot_number=i) for i in range(1, slots_per_floor + 1)]

    def find_available_slot(self, vehicle_type):
        for slot in self.slots:
            if slot.vehicle is None and self.is_slot_compatible(slot, vehicle_type):
                return slot
        return None

    def is_slot_compatible(self, slot, vehicle_type):
        # Add logic here to check if the slot is compatible with the vehicle type.
        # For example, if the slot type matches the vehicle type.
        return True

    def get_free_slots(self):
        return [slot.slot_number for slot in self.slots if slot.vehicle is None]

    def get_occupied_slots(self, vehicle_type):
        return [slot.slot_number for slot in self.slots if slot.vehicle and slot.vehicle.vehicle_type == vehicle_type]

class ParkingLot:
    def __init__(self, parking_lot_id, num_floors, num_slots_per_floor):
        self.parking_lot_id = parking_lot_id
        self.floors = [ParkingFloor(floor_number=i, slots_per_floor=num_slots_per_floor) for i in range(1, num_floors + 1)]

    def park_vehicle(self, vehicle_type, registration_number, color):
        vehicle = Vehicle(vehicle_type, registration_number, color)
        for floor in self.floors:
            slot = floor.find_available_slot(vehicle_type)
            if slot:
                slot.occupy(vehicle)
                ticket = Ticket(self.parking_lot_id, floor.floor_number, slot.slot_number, vehicle)
                ticket.parking_spot = slot
                return ticket
        return "Parking Lot Full"

    def unpark_vehicle(self, ticket_id):
        parking_lot_id, floor_number, slot_number = ticket_id.split('_')
        floor_number, slot_number = int(floor_number), int(slot_number)
        if 1 <= floor_number <= len(self.floors) and 1 <= slot_number <= len(self.floors[floor_number - 1].slots):
            slot = self.floors[floor_number - 1].slots[slot_number - 1]
            if slot.vehicle:
                registration_number = slot.vehicle.registration_number
                color = slot.vehicle.color
                slot.vacate()
                entry_time = slot.vehicle.entry_time.strftime("%Y-%m-%d %H:%M:%S")
                exit_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                duration = self.calculate_duration(entry_time, exit_time)
                return f"Unparked vehicle with Registration Number: {registration_number} and Color: {color}. Duration: {duration} hours"
        return "Invalid Ticket"

    def calculate_duration(self, entry_time, exit_time):
        entry_time = datetime.strptime(entry_time, "%Y-%m-%d %H:%M:%S")
        exit_time = datetime.strptime(exit_time, "%Y-%m-%d %H:%M:%S")
        duration = exit_time - entry_time
        return duration.total_seconds() / 3600  # Convert to hours

    def display(self, display_type, vehicle_type):
        if display_type == "free_count":
            for floor in self.floors:
                free_slots = len(floor.get_free_slots())
                print(f"No. of free slots for {vehicle_type} on Floor {floor.floor_number}: {free_slots}")
        elif display_type == "free_slots":
            for floor in self.floors:
                free_slots = floor.get_free_slots()
                print(f"Free slots for {vehicle_type} on Floor {floor.floor_number}: {', '.join(map(str, free_slots))}")
        elif display_type == "occupied_slots":
            for floor in self.floors:
                occupied_slots = floor.get_occupied_slots(vehicle_type)
                print(f"Occupied slots for {vehicle_type} on Floor {floor.floor_number}: {', '.join(map(str, occupied_slots))}")

def main(input_file, output_file):
    parking_lot = None
    output_lines = []

    with open(input_file, 'r') as input_file:
        for line in input_file:
            command = line.strip().split()
            if command[0] == "create_parking_lot":
                parking_lot_id, num_floors, num_slots_per_floor = command[1], int(command[2]), int(command[3])
                parking_lot = ParkingLot(parking_lot_id, num_floors, num_slots_per_floor)
                output_lines.append(f"Created parking lot with {num_floors} floors and {num_slots_per_floor} slots per floor")

            elif command[0] == "park_vehicle":
                if parking_lot:
                    vehicle_type, registration_number, color = command[1], command[2], command[3]
                    ticket = parking_lot.park_vehicle(vehicle_type, registration_number, color)
                    if ticket == "Parking Lot Full":
                        output_lines.append("Parking Lot Full")
                    else:
                        output_lines.append(f"Parked vehicle. Ticket ID: {ticket.ticket_id}")

            elif command[0] == "unpark_vehicle":
                if parking_lot:
                    ticket_id = command[1]
                    result = parking_lot.unpark_vehicle(ticket_id)
                    output_lines.append(result)

            elif command[0] == "display":
                if parking_lot:
                    display_type, vehicle_type = command[1], command[2]
                    parking_lot.display(display_type, vehicle_type)

    with open(output_file, 'w') as output_file:
        for line in output_lines:
            print(line)
            output_file.write(line + '\n')

if __name__ == "__main__":
    main("input.txt", "output.txt")
