// ❗️❗️❗️  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// (falsy) значення, що приводяться до false у логічному перетворенні:
// 0
// NaN
// null
// undefined
// порожній рядок
// false.

// Абсолютно все інше приводиться до true.

// && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// || - запинається на true
// Повертає перше правдиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

// ?? - оператор нульового злиття

// console.log(null ?? 1); // 1;
// console.log(undefined ?? 1); // 1
// console.log(false ?? 1); // false
// console.log(0 ?? 1); // false

// ❗️❗️❗️ Оператори розгалудження

// const number1 = Number(prompt("Please, enter a number 1"));
// const number2 = Number(prompt("Please, enter a number 2"));

// if (number1 > number2) {
//   console.log("I'm here");
// }

// if (number1 > number2) {
//   console.log("+");
// }

// if (number1 < number2) {
//   console.log("-");
// }

// if (number1 > number2) {
//   console.log("+");
// } else {
//   console.log("-");
// }

// if (number1 > number2) {
//   console.log("+");
// } else if (number1 < number2) {
//   console.log("-");
// } else if (number1 === number2) {
//   console.log("=");
// }

// if (number1 > number2) {
//   console.log("+");
// } else if (number1 < number2) {
//   console.log("-");
// } else {
//   console.log("=");
// }

// if (number1 === number2) {
//   console.log("=");
// } else {
//   if (number1 > number2) {
//     console.log("+");
//   } else {
//     console.log("-");
//   }
// }

// ❗️❗️❗️ Тернарний оператор

// number1 > number2 ? console.log("+") : console.log("-");

// // not recommended
// number1 === number2
//   ? console.log("=")
//   : number1 > number2
//   ? console.log("+")
//   : console.log("-");

// ❗️❗️❗️ Switch

// const number3 = Number(prompt("Please, enter number between 1 and 3"));

// if (number3 === 1) {
//   console.log("You entered 1");
// } else if (number3 === 2) {
//   console.log("You entered 2");
// } else if (number3 === 3) {
//   console.log("You entered 3");
// } else {
//   console.log("You entered another number");
// }

// switch (number3) {
//   case 1:
//     console.log("You entered 1");
//     break;
//   case 2:
//     console.log("You entered 2");
//     break;
//   case 3:
//     console.log("You entered 3");
//     break;
//   default:
//     console.log("You entered another number");
// }

// const number4 = 57;

// if (number4 >= 50 && number4 <= 100) {
//   console.log("Here1");
// }

// if (number4 < 50 || number4 > 100) {
// //   console.log("Here2");
// }

// if (0 || !null) {
//   console.log("Here3");
// }

// ❗️❗️❗️ Цикли

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   // counter = counter + 1
//   counter += 1;
// }

// console.log("Test");

// let number;

// do {
//   console.log("here");
//   number = Number(prompt("Input number"));
// } while (number <= 100);

// console.log(number);

// let a;
// let b;
// let c;

// let a, b, c;

// a = 5;
// b = 10;
// c = 25;
