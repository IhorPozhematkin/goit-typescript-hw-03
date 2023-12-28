interface IKey {
  unlock(): void;
}

class Key implements IKey {
  unlock(): void {
    console.log("The door is unlocked!");
  }
}

class Person {
  private key: IKey;

  constructor(key: IKey) {
    this.key = key;
  }

  getKey(): IKey {
    return this.key;
  }
}

class MyHouse {
  private key: IKey;

  constructor(key: IKey) {
    this.key = key;
  }

  openDoor(key: IKey): void {
    if (key === this.key) {
      key.unlock();
      console.log("The door is opened.");
    } else {
      console.log("Invalid key");
    }
  }

  comeIn(person: Person): void {
    console.log("Welcome!)");
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
