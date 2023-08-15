
# Observer and Subject are abstract classes, representing the abstract concepts of observers and observables, respectively.
# ConcreteObserver and ConcreteSubject are concrete classes that provide implementations for the abstract observer and observable classes.
# The observer pattern is implemented with the ConcreteObserver observing changes in the ConcreteSubject (which is the observable).

# _observers:
# The use of an underscore (_) prefix before variable names in class attributes is a common naming convention in Python. It indicates that a variable is intended to be "protected," meaning it's intended for internal use within the class or module and not part of the public interface. It's a way to suggest that the variable should not be accessed directly from outside the class.
# However, it's important to note that this is just a naming convention and doesn't enforce any access control like you might see in languages that have public, private, and protected access modifiers. In Python, everything is accessible if you have a reference to it, regardless of the underscore prefix.


from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, message):
        pass

class Subject(ABC):
    @abstractmethod
    def attach(self, observer):
        pass

    @abstractmethod
    def detach(self, observer):
        pass

    @abstractmethod
    def notify(self, message):
        pass

class ConcreteObserver(Observer):
    def __init__(self, name):
        self._name = name

    def update(self, message):
        print(f"{self._name} received message: {message}")

class ConcreteSubject(Subject):
    def __init__(self, subject_name):
        self._subject_name = subject_name
        self._observers = []

    def attach(self, observer):
        if observer not in self._observers:
            self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

    def set_state(self, state):
        self._state = state
        self.notify(f"{self._subject_name} state changed to {state}")

if __name__ == "__main__":
    observer1 = ConcreteObserver("Observer 1")
    observer2 = ConcreteObserver("Observer 2")

    subject = ConcreteSubject("Subject 1")
    subject.attach(observer1)
    subject.attach(observer2)

    subject.set_state("State 1")
    subject.set_state("State 2")

    subject.detach(observer1)

    subject.set_state("State 3")
