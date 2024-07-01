// Component interface
interface Coffee {
  cost(): number;
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
}

// Decorator Interface
interface CoffeeDecorator extends Coffee {
  coffee: Coffee;
}

// ConcreteDecorator
class MilkDecorator implements CoffeeDecorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 2;
  }
}

// Another ConcreteDecorator
class SugarDecorator implements CoffeeDecorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1;
  }
}

// Usage
const simpleCoffee: Coffee = new SimpleCoffee();
console.log("Cost of simple coffee:", simpleCoffee.cost());

const milkCoffee: CoffeeDecorator = new MilkDecorator(simpleCoffee);
console.log("Cost of milk coffee:", milkCoffee.cost());

const sugarMilkCoffee: CoffeeDecorator = new SugarDecorator(milkCoffee);
console.log("Cost of sugar milk coffee:", sugarMilkCoffee.cost());
