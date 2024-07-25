import { AttributeValue } from "./attributeValue";
import { KeyValueStore } from "./KeyValueStore";

export class CommandHandlers {
  constructor(private store: KeyValueStore) {}

  async handleGet(key: string): Promise<void> {
    try {
      const value = await this.store.get(key);
      if (value) {
        const output = Array.from(value.entries())
          .map(([k, v]) => `${k}: ${(v as AttributeValue).getValue()}`)
          .join(", ");
        console.log(output);
      } else {
        console.log(`No entry found for ${key}`);
      }
    } catch (error) {
      console.error("Error in handleGet:", error);
    }
  }

  async handlePut(args: string[]): Promise<void> {
    const key = args[0];
    const attributes: [string, string][] = [];
    for (let i = 1; i < args.length; i += 2) {
      attributes.push([args[i], args[i + 1]]);
    }
    try {
      await this.store.put(key, attributes);
      console.log(`Successfully added/updated key: ${key}`);
    } catch (error) {
      if (error instanceof Error && error.message === "Data Type Error") {
        console.log("Data Type Error");
      } else {
        console.error("Error in handlePut:", error);
      }
    }
  }

  async handleDelete(key: string): Promise<void> {
    try {
      await this.store.delete(key);
      console.log(`Successfully deleted key: ${key}`);
    } catch (error) {
      console.error("Error in handleDelete:", error);
    }
  }

  async handleSearch(
    attributeKey: string,
    attributeValue: string
  ): Promise<void> {
    try {
      const keys = await this.store.search(attributeKey, attributeValue);
      console.log(keys.join(",") || "No matching keys found");
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  }

  async handleKeys(): Promise<void> {
    try {
      const keys = await this.store.keys();
      console.log(keys.join(",") || "No keys found");
    } catch (error) {
      console.error("Error in handleKeys:", error);
    }
  }
}
