class Vehicle:
    def __init__(self, vehicle_type, reg_number, color):
        self.type = vehicle_type  # "CAR","TRUCK","BIKE"
        self.reg_number = reg_number
        self.color = color
        self.id = str(vehicle_type) + "_" + str(reg_number) + "_" + str(color)
