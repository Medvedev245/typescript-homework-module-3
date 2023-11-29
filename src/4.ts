class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean = false;
  protected tenants: Person[] = [];

  constructor(private key: Key) {
    this.key = key;
  }

  abstract comeIn(person: Person): void;

  isDoorOpen(): boolean {
    return this.door;
  }

  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }

  // comeIn(person: Person): void {
  //     if (this.isDoorOpen()) {
  //       this.tenants.push(person);
  //     }
  //   }

  closeDoor(): void {
    this.door = false;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  //   openDoor(key: Key): void {
  //     if (this.key.getSignature() === key.getSignature()) {
  //       this.door = true;
  //     }
  //   }

  comeIn(person: Person): void {
    if (this.isDoorOpen()) {
      this.tenants.push(person);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
