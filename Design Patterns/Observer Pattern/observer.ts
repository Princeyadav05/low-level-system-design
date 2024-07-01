// Define the Subject interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Define the Observer interface
interface Observer {
  update(data: any): void;
}

// Implement the ConcreteSubject class
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private data: any;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.data);
    }
  }

  setData(data: any): void {
    this.data = data;
    this.notifyObservers();
  }
}

// Implement the ConcreteObserver class
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(data: any): void {
    console.log(`${this.name} received data: ${data}`);
  }
}

// Usage example
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");
const observer3 = new ConcreteObserver("Observer 3");

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.setData("Hello, world!");

subject.removeObserver(observer2);
subject.registerObserver(observer3);

subject.setData("Goodbye!");
