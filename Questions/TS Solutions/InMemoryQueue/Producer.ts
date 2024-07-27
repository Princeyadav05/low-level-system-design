import { Topic } from "./Topic";
import { Message } from "./Message";

export class Producer {
  constructor(public id: string) {}

  publish(topic: Topic, content: string) {
    const message = new Message(content);
    topic.addMessage(message);
  }
}
