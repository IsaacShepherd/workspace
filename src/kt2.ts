import { log } from "console";

class User {
  name: string;
  public login: string;
  private password: string;

  constructor(name: string, login: string, password: string) {
    this.name = name;
    this.login = login;
    this.password = password;
  }

  public showInfo(): void {
    console.log(
      "name = " +
        this.name +
        " login = " +
        this.login +
        " password = " +
        this.password
    );
  }
  setName(name: string): void {
    this.name = name;
  }
}
const user1: User = new User("Valya", "val", "123");
user1.setName("Ivan");
user1.showInfo();
