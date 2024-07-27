import { Topic } from "./Topic";
import { Producer } from "./Producer";
import { Consumer } from "./Consumer";

export class QueueSystem {
  private topics: Map<string, Topic> = new Map();
  private producers: Map<string, Producer> = new Map();
  private consumers: Map<string, Consumer> = new Map();

  createTopic(name: string): Topic {
    if (!this.topics.has(name)) {
      const topic = new Topic(name);
      this.topics.set(name, topic);
    }
    return this.topics.get(name)!;
  }

  createProducer(id: string): Producer {
    const producer = new Producer(id);
    this.producers.set(id, producer);
    return producer;
  }

  createConsumer(id: string): Consumer {
    const consumer = new Consumer(id);
    this.consumers.set(id, consumer);
    return consumer;
  }

  getTopic(name: string): Topic | undefined {
    return this.topics.get(name);
  }

  subscribeConsumerToTopic(consumerId: string, topicName: string) {
    const consumer = this.consumers.get(consumerId);
    const topic = this.topics.get(topicName);
    if (consumer && topic) {
      consumer.subscribe(topicName);
      topic.subscribe(consumer);
    }
  }

  publishMessage(producerId: string, topicName: string, content: string) {
    const producer = this.producers.get(producerId);
    const topic = this.topics.get(topicName);
    if (producer && topic) {
      producer.publish(topic, content);
    }
  }
}
