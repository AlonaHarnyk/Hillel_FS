// "use strict";

// function test() {
//   console.log(this);
// }

// // test();

// const user = {
//   name: "Anton",
//   getName() {
//     // console.log(user.name)
//     console.log(this.name);
//   },
// };

// // user.getName();

// user.email = "test@ukr.net";

// // console.log(user);

// user.getTestThis = test;

// test(); // this => window or undefined

// user.getTestThis(); // this => user

// const test2 = () => {
//   console.log(this);
// };

// user.getTestThis2 = test2;

// test2(); // this => window or undefined

// user.getTestThis2(); // this => window

// const obj = {
//   testMethod() {
//     const testFunc = () => {
//       console.log("testFunc", this); // obj
//     };

//     testFunc();

//     console.log("testMethod", this); // obj
//   },
// };

// obj.testMethod();

// const bmw = {
//   brand: "BMW",
//   speed: 160,
// };

// const audi = {
//   brand: "Audi",
//   speed: 140,
// };

// function drive(city, name) {
//   console.log(this);
//   console.log(`Hello, ${name}!`);
//   console.log(`${this.brand} drives with speed ${this.speed} to ${city}`);
// }

// drive("Lviv", "John");

// drive.call(bmw, "Lviv", "John");
// drive.apply(audi, ["Kyiv", "Olha"]);

// const bmvDrive = drive.bind(bmw);

// bmvDrive("Odesa", "Jack");

// const audiDrive = drive.bind(audi);

// audiDrive("Odesa", "Jack");

// const person = {
//   eyes: "green",
// };

// const john = Object.create(person);

// john.weight = 70;
// // john.eyes = "blue";

// console.log(john);

// console.log(john.weight);
// console.log(john.eyes);

// console.log(person.isPrototypeOf(john)); // true
// console.log(john.isPrototypeOf(person)); // false

// const user = {
//   name: "Olha",
//   age: 20,
//   weight: 56,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// for (const key in john) {
//   console.log(key);
//   console.log(john.hasOwnProperty(key));
//   // console.log(user[key]);
// }

// console.log(Object.keys(john));

// const testObj = Object.create(null);

// console.log(testObj);

class Student {
  constructor({ name, age, homeworkResults = [] }) {
    this.name = name;
    this.age = age;
    this.homeworkResults = homeworkResults;
  }

  addHomeworkResult(result) {
    this.homeworkResults.push(result);
  }
}

const student1 = new Student({ name: "John", age: 15 });
const student2 = new Student({ age: 20, name: "Jack" });
const student3 = new Student();
// const student4 = new Student();
// const student5 = new Student();
// console.log(student1);
// console.log(student2);
console.log(student3);

student1.addHomeworkResult({ html: 12 });

console.log(student1.homeworkResults);
