// Complex subsystem classes
class CPU {
    public freeze(): void { console.log("CPU: Freezing..."); }
    public jump(position: number): void { console.log(`CPU: Jumping to position ${position}`); }
    public execute(): void { console.log("CPU: Executing..."); }
}

class Memory {
    public load(position: number, data: string): void {
        console.log(`Memory: Loading data "${data}" to position ${position}`);
    }
}

class HardDrive {
    public read(size: number): string {
        console.log(`HardDrive: Reading ${size} bytes.`);
        return "data";
    }
}

// Facade
class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    public start(): void {
        this.cpu.freeze();
        this.memory.load(0, this.hardDrive.read(1024));
        this.cpu.jump(0);
        this.cpu.execute();
    }
}

// Client code
const computer = new ComputerFacade();
computer.start();