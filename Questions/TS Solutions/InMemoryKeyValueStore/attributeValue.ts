export class AttributeValue {
  private value: string | number | boolean;
  private type: string;

  constructor(value: string | number | boolean) {
    this.value = value;
    this.type = typeof value;
  }

  getValue(): string | number | boolean {
    return this.value;
  }

  getType(): string {
    return this.type;
  }

  static parseValue(value: string): AttributeValue {
    if (value === "true" || value === "false") {
      return new AttributeValue(value === "true");
    } else if (!isNaN(Number(value))) {
      if (value.includes(".")) {
        return new AttributeValue(parseFloat(value));
      } else {
        return new AttributeValue(parseInt(value));
      }
    }
    return new AttributeValue(value);
  }
}
