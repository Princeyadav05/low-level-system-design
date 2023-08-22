class Ticket:
    def __init__(self, parking_lot_id, floor_number, slot_number):
        self.ticket_id = f"{parking_lot_id}_{floor_number}_{slot_number}"
