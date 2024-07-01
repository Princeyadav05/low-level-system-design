interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private expirationDate: string;
  private cvv: string;

  constructor(cardNumber: string, expirationDate: string, cvv: string) {
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  pay(amount: number): void {
    console.log(`Paying ${amount} using credit card ${this.cardNumber}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal account ${this.email}`);
  }
}

class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  private items: Item[] = [];
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  add_item(item: Item): void {
    this.items.push(item);
  }

  calculate_total(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  show_cart(): void {
    this.items.forEach((item) => {
      console.log(`${item.name} - ${item.price}`);
    });
  }

  checkout(): void {
    const total = this.calculate_total();
    this.paymentStrategy.pay(total);
  }
}

const creditCardPayment = new CreditCardPayment(
  "1234-5678-9012-3456",
  "12/25",
  "123"
);
const paypalPayment = new PayPalPayment("example@email.com", "secretpassword");

const cart1 = new ShoppingCart(creditCardPayment);
cart1.add_item(new Item("Item 1", 50));
cart1.add_item(new Item("Item 2", 30));
cart1.add_item(new Item("Item 3", 100));
cart1.show_cart();
cart1.checkout(); // Pays with credit card

console.log("-------------------");

const cart2 = new ShoppingCart(paypalPayment);
cart2.add_item(new Item("Item 1", 20));
cart2.add_item(new Item("Item 2", 900));

cart2.show_cart();
cart2.checkout(); // Pays with PayPal
