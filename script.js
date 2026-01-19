// Задача 1: Рядок — число (test)
// ^\d+$

// ^ — початок рядка

// \d+ — одна або більше цифр

// $ — кінець рядка

// console.log(/^\d+$/.test("123")); // true
// console.log(/^\d+$/.test("12a")); // false

// Задача 2: Одне слово без пробілів (test)
// ^\w+$

// ^ — початок

// \w+ — букви, цифри, _

// $ — кінець

// console.log(/^\w+$/.test("hello")); // true
// console.log(/^\w+$/.test("hello world")); // false

// Задача 3: Знайти всі числа (match)
// \d+

// \d+ — одна або більше цифр

// console.log("У мене 3 яблука і 12 груш".match(/\d+/g));
// // ["3", "12"]

// Задача 4: Email (test)
// ^\w+@\w+\.\w+$

// ^ — початок

// \w+ — імʼя користувача

// @ — символ @

// \w+ — домен

// \. — крапка

// \w+ — зона (.com, .ua)

// $ — кінець

// console.log(/^\w+@\w+\.\w+$/.test("test@gmail.com")); // true
// console.log(/^\w+@\w+\.\w+$/.test("test@gmail"));    // false

// Задача 5: Маскування цифр (replace)
// \d

// \d — кожна цифра

// console.log("099-123-45-67".replace("/d/g", "*"));
// // "***-***-**-**"

// Задача 6: Знайти позицію слова (search)
// world

// шукає "world"

// console.log("Hello world".search(/world/)); // 6
// console.log("Hello World".search(/world/i)); // 6, i = регістронезалежно

// Задача 7: Розбиття рядка (split)
// [,; ]

// [ ] — один із символів

// розбиває рядок за комою, крапкою з комою або пробілом

// console.log("one,two;three four".split(/[,; ]/));
// // ["one","two","three","four"]

// Задача 8: Перша цифра через exec
// \d+

// exec повертає перший збіг

// console.log(/\d+/.exec("У мене 12 яблук і 3 груші"));
// [
//   "12",           // [0] — сам текст, який збігся
//   index: 7,       // позиція першого символу збігу у рядку
//   input: "У мене 12 яблук і 3 груші",
//   groups: undefined
// ]

// const result = /\d+/.exec("У мене 12 яблук і 3 груші");

// if (result) {
//   const number = Number(result[0]); // "12" -> 12
//   console.log(number); // 12
// }

// Задача 9: Всі цифри через matchAll (групи)
// /(\d+)/g

// console.log([..."3 і 12".matchAll(/(\d+)/g)]);
// // кожен обʼєкт містить групу

// matchAll дозволяє працювати з усіма входженнями

// Кожен матч matchAll повертає масив
// Перший матч "12":
// [
//   "12",      // [0] повний матч
//   "12",      // [1] перша група
//   index: 7,
//   input: "У мене 12 яблук і 3 груші",
//   groups: undefined
// ]

// Другий матч "3":
// [
//   "3",       // [0] повний матч
//   "3",       // [1] перша група
//   index: 17,
//   input: "У мене 12 яблук і 3 груші",
//   groups: undefined
// ]

// const numbers = [..."У мене 12 яблук і 3 груші".matchAll(/(\d+)/g)].map(m => Number(m[1]));
// console.log(numbers); // [12, 3]

// console.log("start");

// const timerId = setTimeout(
//   (a, b) => {
//     console.log(a);
//     console.log(b);
//   },
//   0,
//   1,
//   2
// );

// clearTimeout(timerId);

// console.log("test");

// const timerId = setInterval(
//   (a, b) => {
//     console.log(a);
//     console.log(b);
//   },
//   1000,
//   1,
//   2
// );

// setTimeout(() => {
//   clearInterval(timerId);
// }, 10000);

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve({ name: "Olha", age: 45, id: 1 });
//     } else {
//       reject("Error!");
//     }
//   }, 500);
// });

// console.log(promise);

// promise.then(
//   (data) => console.log(data),
//   (error) => console.log(error)
// );

// promise
//   .then((data) => data.id)
//   .then((id) => console.log(id))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("The end!"));

localStorage.setItem("data", JSON.stringify([{ a: 1 }, { a: 2 }]));

const data = localStorage.getItem("data");

const parsedData = JSON.parse(data);

console.log(parsedData.map((i) => console.log(i)));
