
# In this example, we have defined a strategy interface PaymentStrategy and two concrete
# strategy classes, CreditCardPayment and PayPalPayment, both implementing the pay method.
# The ShoppingCart class uses the selected payment strategy to process payments.


from abc import ABC, abstractmethod

# Define the strategy interface using ABC
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

# Concrete strategy classes
class CreditCardPayment(PaymentStrategy):
    def __init__(self, card_number, expiration_date, cvv):
        self.card_number = card_number
        self.expiration_date = expiration_date
        self.cvv = cvv

    def pay(self, amount):
        print(f"Paying ${amount} using credit card {self.card_number}")

class PayPalPayment(PaymentStrategy):
    def __init__(self, email, password):
        self.email = email
        self.password = password

    def pay(self, amount):
        print(f"Paying ${amount} using PayPal account {self.email}")

# Context class that uses the strategy
# Context classes are responsible for selecting and setting the concrete strategy classes.

class ShoppingCart:
    # You have to pass a strategy in the context constructor
    def __init__(self, payment_strategy):
        self.items = []
        self.payment_strategy = payment_strategy

    def add_item(self, item):
        self.items.append(item)

    def calculate_total(self):
        total = sum(item.price for item in self.items)
        return total

    def show_cart(self):
        for item in self.items:
            print(item.name, item.price)

    def checkout(self):
        total = self.calculate_total()
        self.payment_strategy.pay(total)

# Item class
class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price


# Client code
if __name__ == "__main__":
    credit_card_payment = CreditCardPayment("1234-5678-9012-3456", "12/25", "123")
    paypal_payment = PayPalPayment("example@email.com", "secretpassword")

    cart1 = ShoppingCart(credit_card_payment)
    cart1.add_item(Item("Item 1", 50))
    cart1.add_item(Item("Item 2", 30))
    cart1.add_item(Item("Item 2", 100))
    cart1.show_cart()
    cart1.checkout()  # Pays with credit card

    cart2 = ShoppingCart(paypal_payment)
    cart2.add_item(Item("Item 3", 20))

    cart1.show_cart()
    cart2.checkout()  # Pays with PayPal
