export interface Command {
  execute(args: string[]): string;
}
