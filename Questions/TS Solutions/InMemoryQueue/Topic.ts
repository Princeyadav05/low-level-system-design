import { Message } from "./Message";
import { Consumer } from "./Consumer";

export class Topic {
  private messages: Message[] = [];
  private consumers: Set<Consumer> = new Set();

  constructor(public name: string) {}

  addMessage(message: Message) {
    this.messages.push(message);
    this.notifyConsumers(message);
  }

  subscribe(consumer: Consumer) {
    this.consumers.add(consumer);
  }

  unsubscribe(consumer: Consumer) {
    this.consumers.delete(consumer);
  }

  private notifyConsumers(message: Message) {
    this.consumers.forEach((consumer) =>
      consumer.receiveMessage(this.name, message)
    );
  }
}
