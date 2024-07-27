import { User } from "./../models/User";

export class UserRepository {
  private users: Map<string, User> = new Map();

  constructor() {
    const predefinedUsers = ["prince", "goku", "vegeta", "luffy", "zoro"];
    predefinedUsers.forEach((username) => {
      this.users.set(username, new User(username, username));
    });
  }

  getUser(userId: string): User | undefined {
    return this.users.get(userId);
  }
}
