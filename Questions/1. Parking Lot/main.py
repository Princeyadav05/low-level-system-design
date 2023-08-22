class CommandLineInterface:
    def __init__(self):
        self.parking_lot = ParkingLot()
        self.slot_strategy = {
            "Car": CarSlotAllocationStrategy(),
            "Bike": BikeSlotAllocationStrategy(),
            "Truck": TruckSlotAllocationStrategy()
        }

    def run(self):
        while True:
            command = input("Enter command: ")
            # Implement CLI commands and actions based on user input

if __name__ == "__main__":
    cli = CommandLineInterface()
    cli.run()
