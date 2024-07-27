import { Library } from "../Library";
import { Command } from "./Command";

export class CreateLibraryCommand implements Command {
  execute(args: string[]): string {
    const [, libraryId, numberOfRacks] = args;
    return Library.getInstance().createLibrary(
      libraryId,
      parseInt(numberOfRacks)
    );
  }
}
