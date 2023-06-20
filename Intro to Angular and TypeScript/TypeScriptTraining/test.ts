let isEven: boolean = false;
let num: number = 4;
let str: string = "";

type User = {
  name: string;
  age: number;
};

const peshoUser = {
  name: "Pesho",
  age: 21,
} as User;

interface AnotherUser {
  firstName: string;
  id: number;
  getUserName: () => string;
}

class AnotherUserClass implements AnotherUser {
  firstName: string;
  id: number;

  getUserName() {
    return this.firstName;
  }
}

// API call
const anotherUserList = [
  { firstName: "Ivan", id: 1 },
  { firstName: "Mitko", id: 2 },
  { firstName: "Maria", id: 3 },
] as AnotherUser[];

anotherUserList.forEach(({ firstName, id }) => {
  console.log(`${id}: ${firstName}`);
});

// let isEven: boolean = false;
// let num: number = 4;
// let str: string = "";

class Human {
  speak() {
    console.log("hello!");
  }
}

class Person extends Human {
  private name: string;
  age: number;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }
}

const personIvan = new Person("Ivan", 33);
personIvan.speak();

function getIdentity<T>(id: T) {
  console.log(id);
}

getIdentity<string>("123");
getIdentity<number>(123);

enum PaymentStatus {
  Failed,
  Successful,
  Pending,
}
