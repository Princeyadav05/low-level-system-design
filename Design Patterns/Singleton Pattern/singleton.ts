// This below code show the Singleton pattern in TypeScript.
// It ensures only one instance of the Singleton class can be created and accessed globally.

class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("Method of the singleton");
  }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true

instance1.someMethod(); // Output: Method of the singleton
