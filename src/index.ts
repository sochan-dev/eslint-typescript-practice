export default class World {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  public sayHello(msg: string | null) {
    if (msg) {
      console.log(`${this.message}-${msg}`);
    }
  }
}
