import { Library } from "../Library";
import { Command } from "./Command";

export class SearchBookCommand implements Command {
  execute(args: string[]): string {
    const [, attributeKey, attributeValue] = args;
    return Library.getInstance().search(attributeKey, attributeValue);
  }
}
