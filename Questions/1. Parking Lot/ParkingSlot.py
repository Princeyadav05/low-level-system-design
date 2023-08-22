from Vehicles import Vehicle

class ParkingSlot:
    def  __init__(self,floor,slot_number):
        self.floor = floor # 1 to n
        self.slot_number = slot_number # 1 to n
        self.filled = False # True or False represent filled or not
        self.ticket_id = None # on True add ticket Id
        self.vehicle = None
        if(slot_number == 0):
            self.support_type = "TRUCK"
        elif(slot_number <= 2):
            self.support_type = "BIKE"
        else:
            self.support_type = "CAR"

    def fill_vehicle(self,ticket_id,vehicle_type,vehicle_reg_no,vehicle_color):
        self.filled = True
        self.ticket_id = ticket_id
        self.vehicle = Vehicle(vehicle_type,vehicle_reg_no,vehicle_color)