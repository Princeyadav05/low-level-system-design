import * as readlineSync from "readline-sync";
import { QueueSystem } from "./QueueSystem";

const queueSystem = new QueueSystem();

// Create topics
const topic1 = queueSystem.createTopic("topic1");
const topic2 = queueSystem.createTopic("topic2");

// Create producers
const producer1 = queueSystem.createProducer("producer1");
const producer2 = queueSystem.createProducer("producer2");

// Create consumers
const consumers = [
  "consumer1",
  "consumer2",
  "consumer3",
  "consumer4",
  "consumer5",
].map((id) => queueSystem.createConsumer(id));

// Subscribe consumers to topics
consumers.forEach((consumer) =>
  queueSystem.subscribeConsumerToTopic(consumer.id, "topic1")
);
["consumer1", "consumer3", "consumer4"].forEach((id) =>
  queueSystem.subscribeConsumerToTopic(id, "topic2")
);

function publishMessage() {
  const producerId = readlineSync.question(
    "Enter producer ID (producer1 or producer2): "
  );
  const topicName = readlineSync.question(
    "Enter topic name (topic1 or topic2): "
  );
  const message = readlineSync.question("Enter message content: ");

  queueSystem.publishMessage(producerId, topicName, message);
}

while (true) {
  console.log("\n1. Publish a Message");
  console.log("\n2. Exit");

  const choice = readlineSync.question("Enter Choice: ");
  if (choice === "1") {
    publishMessage();
  } else if (choice === "2") {
    break;
  } else {
    console.log(`Invalid Input! Please try again!`);
  }
}

console.log("Exiting!");
