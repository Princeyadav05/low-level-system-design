# Solid Principles

The SOLID principles are a set of guidelines for writing clean, maintainable, and scalable code. These principles were introduced by Robert C. Martin (also known as Uncle Bob). 

### 1. **Single Responsibility Principle (SRP)**

A class should have only one reason to change, meaning it should only have one job or responsibility.

```typescript
// Before applying SRP: One class handling multiple responsibilities
class UserManager {
    addUser(user: string) {
        // Logic to add user
        console.log(`User ${user} added`);
    }

    generateReport() {
        // Logic to generate report
        console.log('Report generated');
    }
}

// After applying SRP: Split into two classes, each with a single responsibility
class UserService {
    addUser(user: string) {
        // Logic to add user
        console.log(`User ${user} added`);
    }
}

class ReportService {
    generateReport() {
        // Logic to generate report
        console.log('Report generated');
    }
}

```

### **2. Open/Closed Principle (OCP)**

Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.

```typescript
// Before applying OCP: Modifying existing class to add new functionality
class GreetingService {
    greet(language: string) {
        if (language === 'English') {
            console.log('Hello');
        } else if (language === 'Spanish') {
            console.log('Hola');
        }
    }
}

// After applying OCP: Extend functionality without modifying existing code
interface Greeter {
    greet(): void;
}

class EnglishGreeter implements Greeter {
    greet() {
        console.log('Hello');
    }
}

class SpanishGreeter implements Greeter {
    greet() {
        console.log('Hola');
    }
}

class GreetingService {
    private greeter: Greeter;

    constructor(greeter: Greeter) {
        this.greeter = greeter;
    }

    greet() {
        this.greeter.greet();
    }
}

```

### **3. Liskov Substitution Principle (LSP)**

Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, a subclass should behave in such a way that it can substitute its superclass without the user knowing the difference.

This indicates that, assuming that class B is a subclass of class A, we should be able to present an object of class B to any method that expects an object of type A without worrying that the method may produce strange results.

```typescript
// Before applying LSP

class Rectangle {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(size: number) {
        super(size, size);
    }

    setWidth(width: number) {
        this.width = width;
        this.height = width; // Ensuring width and height are the same
    }

    setHeight(height: number) {
        this.height = height;
        this.width = height; // Ensuring width and height are the same
    }
}

// Usage
const rectangle: Rectangle = new Square(5);
rectangle.width = 10;
rectangle.height = 20;
console.log(rectangle.getArea()); // Expects 10 * 20 = 200, but gets 20 * 20 = 400

/**
 * Problem
 * According to LSP, we should be able to replace Rectangle with Square without causing issues.
 * However, changing width and height of a Square leads to incorrect behavior of getArea, which violates LSP.
*/


// After applying LSP

class Shape {
    // Common shape properties or methods (if any)
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(public size: number) {
        super();
    }

    getArea(): number {
        return this.size * this.size;
    }
}

// Usage
const rectangle: Shape = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Logs 200

const square: Shape = new Square(5);
console.log(square.getArea()); // Logs 25

/**
 * Both classes adhere to the Liskov Substitution Principle by ensuring that any instance of Shape behaves correctly according to its own rules, without unexpected behavior or incorrect results.
*/


```

### **4. Interface Segregation Principle (ISP)**

Clients should not be forced to depend on interfaces they do not use. Split large interfaces into smaller, more specific ones.

```typescript
// Before applying ISP: One large interface
interface Worker {
    work(): void;
    eat(): void;
}

class Developer implements Worker {
    work() {
        console.log('Coding');
    }

    eat() {
        console.log('Eating');
    }
}

class Robot implements Worker {
    work() {
        console.log('Working');
    }

    eat() {
        // Not applicable for robots
    }
}

// After applying ISP: Split into smaller, more specific interfaces
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Developer implements Workable, Eatable {
    work() {
        console.log('Coding');
    }

    eat() {
        console.log('Eating');
    }
}

class Robot implements Workable {
    work() {
        console.log('Working');
    }
}

```

### **5. Dependency Inversion Principle (DIP)**

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

```typescript
// Before applying DIP: High-level module depends on low-level module
class BackendDeveloper {
    develop() {
        console.log('Developing backend');
    }
}

class FrontendDeveloper {
    develop() {
        console.log('Developing frontend');
    }
}

class Project {
    private backendDeveloper: BackendDeveloper = new BackendDeveloper();
    private frontendDeveloper: FrontendDeveloper = new FrontendDeveloper();

    develop() {
        this.backendDeveloper.develop();
        this.frontendDeveloper.develop();
    }
}

// After applying DIP: Both high-level and low-level modules depend on abstractions
interface Developer {
    develop(): void;
}

class BackendDeveloper implements Developer {
    develop() {
        console.log('Developing backend');
    }
}

class FrontendDeveloper implements Developer {
    develop() {
        console.log('Developing frontend');
    }
}

class Project {
    private developers: Developer[];

    constructor(developers: Developer[]) {
        this.developers = developers;
    }

    develop() {
        this.developers.forEach(developer => developer.develop());
    }
}

// Usage
const developers: Developer[] = [new BackendDeveloper(), new FrontendDeveloper()];
const project = new Project(developers);
project.develop();

```