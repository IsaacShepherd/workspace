class User {
  name: string;
  private login: string;
  private password: string;

  constructor(name: string, login: string, password: string) {
    this.name = name;
    this.login = this.setLogin(login);
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
  setLogin(login:string):string{
    return login;
  }
  setPassword(password:string){
    this.password = password;
  }
}
const user1: User = new User("Valya", "val", "123");
user1.setName("Ivan");
user1.name = "Sanya";
user1.showInfo();
