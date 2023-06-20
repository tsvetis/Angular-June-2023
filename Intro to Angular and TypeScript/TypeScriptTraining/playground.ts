// let num1 = 5;
// let num2: number = 5;

// const isOdd = false;
// const isOdd2: boolean = false;

enum PaymentStatus {
  Failed = 0,
  Successful = 1,
  Pending = 2,
}

//                          0           1            2
const PaymentStatusArr = ["Failed", "Successful", "Pending"];
const PaymentStatusObj = {
  0: "Failed",
  1: "Successful",
  2: "Pending",
};

const PaymentStatus2 = {
  Failed: "Failed",
  Successful: "Successful",
  Pending: "Pending",
};

PaymentStatus2.Failed = "Фаилед";

interface UserInterface {
  name: string;
}

const usersTest2 = [
  { name: "Marto1" }, // 0
  { name: "Marto2" },
  { name: "Marto3" },
  { name: "Marto4" },
  { name: "Marto5" },
  { name: "Marto5" },
] as UserInterface[];

let someVar1: UserInterface = { name: "Marto1213" };
let someVar2 = { name: "Marto1213" } as UserInterface; // cast

let someVar3 = someVar2 as unknown;

function test(name: string, users: UserInterface[]): void {
  //
}

function test2(name: string, users: UserInterface[]): number {
  return 5;
}

function test3(name: string, users: UserInterface[]): string {
  return "5;";
}
