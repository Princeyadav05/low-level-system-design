from ParkingSlot import ParkingSlot

class parking_floors:
    def __init__(self,floors,slots):
        self.floors = {}
        for floor in range(0,int(floors)):
            for slot in range(0,int(slots)):
                if(floor not in self.floors):
                    self.floors[floor] = {}
                self.floors[floor][slot] = ParkingSlot(floor,slot)