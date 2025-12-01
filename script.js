// let value = 5;
// value = value + 10;
// console.log(value); // 15
// value = value + 10;
// console.log(value); // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;
// value1 = value1 - 2;
// console.log(value1); // 8
// value1 = value1 - 2;
// console.log(value1); // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// <, >, <=, >=, ==, ===, !=, !==

// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// ❗️❗️❗️ Загальні правила порівняння

// Результатом порівняння буде бульове значення.

// При порівнянні різних типів операнди приводяться до числа (крім операторів === та !==)
// null не дорівнює нічому крім себе та undefined.
// undefined не дорівнює нічому крім себе та null.
// NaN не дорівнює нічому, навіть самому собі
// Рядки між собою порівнюються за unicode (посимвольно).

// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false
// console.log("4" != 4); // false
// console.log("4" !== 4); // true
// console.log(null > 0); // false
// console.log(null >= 0); // true

// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log("710bjk" - 10); // NaN
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// // console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); // '  -9  5'

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num)
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)

// ❗️❗️❗️ Шаблонні рядки

// const userName = prompt("What is your name?");
// // console.log(userName);

// const text = `My name is ${userName}`;

// console.log(text);

// const word = "tEsT";
// console.log(word.toLowerCase()); // test
// console.log(word.toUpperCase()); // TEST

// const word1 = "superjavascript";
// console.log(word1.includes("super")); // true
// console.log(word1.includes("html")); // false

// console.log(word1.indexOf("java")); // 5
// console.log(word1.indexOf("html")); // -1
// console.log(word1.indexOf("a")); // 6
// console.log(word1.lastIndexOf("a")); // 8

// const word2 = "    string ";
// console.log(word2.trim());

// console.log(word1.slice());
// console.log(word1.slice(0));
// console.log(word1.slice(0, word1.length));

// console.log(word1.slice(5)); //javascript
// console.log(word1.slice(0, 5)); //super

// console.log(word1[5]); // j

// ❗️❗️❗️ Functions

// function logMessageWithName() {
//   const userName = prompt("What is your name?");

//   const text = `My name is ${userName}`;

//   console.log(text);
// }

// logMessageWithName();

// function add(number1, number2) {
//   console.log(number1 + number2);
// }

// add(10, 20);

// add(3, 7);

// function add1(number1, number2) {
//   return number1 + number2;
// }

// let sum = add1(10, 20);

// // sum += 10;

// console.log(sum);

// console.log(add1(3, 7));

// function add2(number1, number2) {
//   const sum = number1 + number2;
//   return sum;
// }

// console.log(add2(4, 16));
