class Wallet {
  balance = 0;
  name = '';

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}

class Car {
  model = '';
  constructor(model: string) {
    this.model = model;
  }
}

// WORSE!
class Person {
  wallet: Wallet;
  car: Car;

  constructor(name: string, balance: number, carModel: string) {
    this.car = new Car(carModel);
    this.wallet = new Wallet(name, balance);
  }
}

const personIvan = new Person('Ivan', 4000, 'VW');
personIvan.wallet.balance; // 4000
const personMaria = new Person('Maria', 5000, 'Pejo');
personMaria.wallet.balance; // 5000;

// BETTER!
class PersonBetter {
  wallet: Wallet;
  car: Car;

  constructor(car: Car, wallet: Wallet) {
    this.car = car;
    this.wallet = wallet;
  }
}

class PersonBetterWithName extends PersonBetter {
  name: string;

  constructor(car: Car, wallet: Wallet, name: string) {
    super(car, wallet);

    this.name = name;
  }
}

const ivansCar = new Car('BMW');
const ivansWallet = new Wallet('Ivan', 500);
const personIvanBetter = new PersonBetter(ivansCar, ivansWallet);
const personIvanBetterWithName = new PersonBetterWithName(
  ivansCar,
  ivansWallet,
  'Ivan'
);
