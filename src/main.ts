import axios from "axios";

// I. Enums

// type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

// let status: PromiseStatus;

// status = 'pending'

// enum PromiseStatus {
//   Pending = "pending",
//   FulFilled = "fulfilled",
//   Rejected = "rejected",
// }

// let status: PromiseStatus;

// status = PromiseStatus.Pending;

// console.log(status);

// type StatusCode = 200 | 201 | 400 | 404 | 500;

// enum StatusCode {
//   Success = 200,
//   Created = 201,
//   BadRequest = 400,
//   NotFound = 404,
//   ServerError = 500,
// }

// let code: StatusCode;

// code = StatusCode.Created;

// interface Request {
//   status: StatusCode;
//   message: string;
// }

// console.log(StatusCode[200]); // зворотнє відображення

// II. Generics

// function logger<T, A>(value1: T, value2: A): T {
//   console.log(value1);
//   console.log(value2);
//   return value1;
// }

// logger<string, number>("test", 5);
// logger<number, string>(5, "a");
// logger<number[], boolean>([1, 2], true);

// const getLastElement = <T>(array: T[]): T => {
//   console.log(array[array.length - 1]);
//   return array[array.length - 1];
// };

// getLastElement<number>([1, 2]);
// getLastElement<string>(["a", "c", "d"]);
// getLastElement<string | number>([1, "test"]);

// function createHelloMessage<T extends { name: string }>(user: T): void {
//   console.log(`Hello, ${user.name}`);
// }

// interface User1 {
//   name: string;
//   age: number;
// }

// interface User2 {
//   name: string;
//   email: string;
// }

// createHelloMessage<User1>({ name: "Olha", age: 47 });
// createHelloMessage<User2>({ name: "Peter", email: "peter@gmail.com" });

// function getLength<T extends { length: number }>(value: T): number {
//   return value.length;
// }

// getLength<string>("test");
// getLength<number[]>([1, 2, 3]);

// function saveToLocalStorage<T>(key: string, value: T): void {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveToLocalStorage<string>("userName", "Jacob");
// saveToLocalStorage<number[]>("array", [1, 2, 3]);

// function loadFromLocalStorage<T>(key: string): T | null {
//   const value = localStorage.getItem(key);
//   if (value !== null) {
//     return JSON.parse(value);
//   }
//   return null;
// }

// loadFromLocalStorage<string>("userName");
// loadFromLocalStorage<number[]>("array");

// interface Todo {
//   id: number;
//   text: string;
//   imageUrl?: string;
// }

// interface HttpResponse<T> {
//   status: number;
//   message: string;
//   data: T;
// }

// const todosResponse: HttpResponse<Todo[]> = {
//   status: 200,
//   message: "Success!",
//   data: [
//     { id: 1, text: "a" },
//     { id: 2, text: "b" },
//   ],
// };

// const todoResponse: HttpResponse<Todo> = {
//   status: 200,
//   message: "Success!",
//   data: { id: 1, text: "a" },
// };

// const todoUrlResponse: HttpResponse<string> = {
//   status: 200,
//   message: "Success!",
//   data: "http//:image",
// };

// III. Promises

// const getData = (): Promise<string> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hello, world!"), 300);
//   });
// };

// getData().then((result) => console.log(result.toUpperCase()));

// interface User {
//   id: number;
//   name: string;
// }

// const getUser = (): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "John" }), 300);
//   });
// };

// getUser().then((user) => console.log(user.name));

// IV. Axios requests

// const getTodos = async (): Promise<Todo[]> => {
//   const response = await axios.get<Todo[]>("http://mock.url/todos");
//   return response.data;
// };

// getTodos().then((data) => data.map((item) => item.text));

// interface TodoData {
//   text: string;
// }

// const createTodo = async (body: TodoData): Promise<Todo> => {
//   const response = await axios.post<Todo>("http://mock.url/todos", body);
//   return response.data;
// };

// V. CLASSES

// 1

// class User1 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// 2

// class User2 {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   sayHello(): string {
//     return `Hi, I’m ${this.name}`;
//   }
// }

// 3
// public — доступні всюди (за замовчуванням)

// private — доступні тільки всередині класу

// protected — доступні в класі та його нащадках

// class Account {
//   private balance: number = 0;

//   protected deposit(amount: number): void {
//     this.balance += amount;
//   }
// }

// 4
// interface Animal1 {
//   name: string;
//   speak(): void;
// }

// class Dog1 implements Animal1 {
//   name: string = "Buddy";

//   speak(): void {
//     console.log("Woof!");
//   }
// }

// 5

// abstract class Animal2 {
//   abstract readonly animalName: string; // без значення
//   abstract makeSound(): void; // абстрактний метод (без реалізації)

//   move(): void {
//     console.log("I am moving");
//   }
// }

// class Dog2 extends Animal2 {
//   animalName: string = "Dog";
//   makeSound(): void {
//     console.log("Woof!");
//   }
// }

// const d = new Dog2();
// d.animalName; // "Dog"
// d.makeSound(); // "Woof!"
// d.move(); // "I am moving"
