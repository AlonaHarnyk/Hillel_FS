// //Primitive types

// let a = "test";
// let b = 5;
// let c = true;

// let d: string;

// a = "test!";
// b = 10;
// c = false;
// d = "true";

// let e: null = null;
// let f: undefined = undefined;

// console.log(e, f);

// let g: unknown;

// if (typeof g === "string") {
//   g.toLowerCase();
// }

// Objects

// interface User {
//   name: string;
//   age: number;
//   readonly id: string;
//   hasJob: boolean;
//   email?: string;
// }

// const user: User = {
//   name: "Olha",
//   age: 25,
//   id: "123",
//   hasJob: true,
// };

// user.email = "test@ukr.net";

// user.age = 30;
// user.id = "234"; // error;

// Arrays

// const letters: string[] = ["a", "b", "c"];
// const numbers: number[] = [1, 2, 3];

// const letters1: Array<string> = ["a", "b", "c"];
// const numbers2: Array<number> = [1, 2, 3];

// const users: User[] = [
//   {
//     name: "Olha",
//     age: 25,
//     id: "123",
//     hasJob: true,
//   },
//   {
//     name: "Ann",
//     age: 45,
//     id: "456",
//     hasJob: false,
//   },
// ];

// Union types

// type PersonValue = null | User;

// let person: PersonValue = null;

// person = {
//   name: "Ann",
//   age: 45,
//   id: "456",
//   hasJob: false,
// };

// type ArrayValue = string | number | boolean;

// const array: ArrayValue[] = ["test", true, 20, 1000, true];

// type OrderStatus = "pending" | "delivered" | "closed";

// interface Order {
//   item: string;
//   quantity: number;
//   status: OrderStatus;
// }

// const order: Order = {
//   item: "book",
//   quantity: 1,
//   status: "pending", // 'delivered', 'closed'
// };

// Functions

// const add = (a: number, b: number): number => a + b;

// const sum = add(5, 10);

// add(5, 100);

// const logMessage = (firstName: string, lastName?: string): void => {
//   if (lastName) {
//     console.log(`Hello, ${firstName} ${lastName}`);
//     return;
//   }
//   console.log(`Hello, ${firstName}`);
// };

// logMessage("John");
// logMessage("John", 'Doe');

// interface User {
//   name: string;
//   greet: (message: string) => void;
// }

// const user: User = {
//   name: "Peter",
//   greet(message) {
//     console.log(`${message}, ${this.name}`);
//   },
// };

// user.greet("Hi");

interface Player {
  name: string;
  isOnline: boolean;
}

const players: Player[] = [
  { name: "John", isOnline: true },
  { name: "Ann", isOnline: true },
  { name: "Oleh", isOnline: false },
  { name: "Ella", isOnline: true },
];

const getActivePlayers = (players: Player[]): Player[] =>
  players.filter(({ isOnline }) => isOnline);

const res = getActivePlayers(players);

console.log(res);
