# Complex subsystem classes
class CPU:
    def freeze(self):
        print("CPU: Freezing...")
    
    def jump(self, position):
        print(f"CPU: Jumping to position {position}")
    
    def execute(self):
        print("CPU: Executing...")

class Memory:
    def load(self, position, data):
        print(f"Memory: Loading data '{data}' to position {position}")

class HardDrive:
    def read(self, size):
        print(f"HardDrive: Reading {size} bytes")
        return "data"

# Facade
class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.memory = Memory()
        self.hard_drive = HardDrive()
    
    def start(self):
        self.cpu.freeze()
        self.memory.load(0, self.hard_drive.read(1024))
        self.cpu.jump(0)
        self.cpu.execute()

# Client code
if __name__ == "__main__":
    computer = ComputerFacade()
    computer.start()