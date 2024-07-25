import { AttributeValue } from "./attributeValue";
import { Mutex } from "async-mutex";

export class KeyValueStore {
  private store: Map<string, Map<string, AttributeValue>>;
  private mutex: Mutex;

  constructor() {
    this.store = new Map();
    this.mutex = new Mutex();
  }

  get(key: string): Promise<Map<string, AttributeValue> | null> {
    return this.mutex.runExclusive(() => {
      return this.store.get(key) || null;
    });
  }

  put(key: string, attributes: [string, string][]): Promise<void | null> {
    return this.mutex.runExclusive(() => {
      const newAttributes = new Map<string, AttributeValue>();
      const existingAttributes = this.store.get(key);

      for (const [attKey, attValue] of attributes) {
        const newAttrValue = AttributeValue.parseValue(attValue);

        if (existingAttributes && existingAttributes.has(attKey)) {
          // This '!.' is  non-null assertion operator
          // '!.' says I'm sure this value exists,
          // so let me access its methods without any null checks.
          const currentType = existingAttributes.get(attKey)!.getType();
          if (currentType !== typeof newAttrValue) {
            throw new Error("Data Type Error");
          }
        }

        newAttributes.set(attKey, newAttrValue);
      }
      this.store.set(key, newAttributes);
    });
  }

  async search(
    attributeKey: string,
    attributeValue: string
  ): Promise<string[]> {
    return this.mutex.runExclusive(() => {
      const result: string[] = [];
      for (const [key, attributes] of this.store.entries()) {
        const attr = attributes.get(attributeKey);
        if (attr) {
          const parsedSearchValue = AttributeValue.parseValue(attributeValue);
          if (attr.getValue() === parsedSearchValue.getValue()) {
            result.push(key);
          }
        }
      }
      return result.sort();
    });
  }

  async delete(key: string): Promise<void> {
    return this.mutex.runExclusive(() => {
      this.store.delete(key);
    });
  }

  async keys(): Promise<string[]> {
    return this.mutex.runExclusive(() => {
      return Array.from(this.store.keys()).sort();
    });
  }
}
