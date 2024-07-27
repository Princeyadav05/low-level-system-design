import { Message } from "./Message";

export class Consumer {
  private subscribedTopics: Set<string> = new Set();

  constructor(public id: string) {}

  subscribe(topicName: string) {
    this.subscribedTopics.add(topicName);
  }

  receiveMessage(topicName: string, message: Message) {
    if (this.subscribedTopics.has(topicName)) {
      console.log(`${this.id} received: ${message.content}`);
    }
  }
}
