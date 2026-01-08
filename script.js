// console.log(a);
// // const a = 10;
// // let a = 10;
// var a = 10;
// console.log(a);

// const b = 5;

// function func() {
//   // const b = 10;

//   if (true) {
//     // const b = 20;
//     // console.log(b);
//   } else {
//     // const b = 25;
//     // console.log(b);
//   }

//   // console.log(b);
// }

// func();

// console.log(b);

// Closure

// const c = () => {
//   const a = 50;
//   return () => a + 10;
// };

// const d = c();

// console.log(d);

// console.log(d());

// (function () {
//   const a = 20;
//   const b = 80;
//   console.log(a + b);
// })();

// // (() => {
// console.log(200);
// // })();

// Currying

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// // const e = add(10);

// // console.log(e);

// // console.log(e(30));

// console.log(add(10)(30));

// function countDown(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n);

//   countDown(n - 1);
// }

// countDown(5);

// const user = {
//   firstName: "Андрій",
//   lastName: "Шевченко",
//   online: true,

//   // Гетер
//   get status() {
//     return this.online ? "Online" : "Offline";
//   },

//   // Сетер
//   set status(value) {
//     if (typeof value !== "boolean") {
//       console.log("Value should be boolean");
//       return;
//     }

//     this.online = value;
//   },
// };

// console.log(user.status);
// user.status = false;
// console.log(user.status);

// const user = {
//   name: "Ann",
//   age: 25,
//   id: 1,
// };

// console.log(Object.getOwnPropertyDescriptor(user, "id"));

// configurable: true;
// enumerable: true;
// value: 1;
// writable: true;

// user.id = 100;

// delete user.id;

// for (key in user) {
//   console.log(key);
// }

// console.log(user);

// Object.defineProperty(user, "id", {
//   configurable: false,
//   enumerable: false,
//   writable: false,
// });

// user.id = 100;

// delete user.id;

// console.log(user);

// for (key in user) {
//   console.log(key);
// }

// console.log(Object.keys(user));

// const a = [1, 2, 2, 3, 1, 5, 4, 4, 4];

// console.log(a.filter((item, index, array) => index === array.indexOf(item)));

// const set = new Set(a);

// console.log(set);

// console.log(set.size);
// console.log(set.has(50));

// set.add(1);

// console.log(Array.from(set));

// const map = new Map();

// console.log(map);

// const item = { a: 5 };

// map.set(item, 10);
// map.set({ b: 20 }, "name");
// map.set(5, "age");

// console.log(map.has(item));

// console.log(map);

// const select = document.querySelector("select");

// select.addEventListener("change", (e) => {
//   const value = e.target.value;
//   localStorage.setItem("theme", value);
//   if (value === "dark") {
//     document.body.style.backgroundColor = "grey";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// });

// const theme = localStorage.getItem("theme");

// if (theme === "dark") {
//   document.body.style.backgroundColor = "grey";
// } else {
//   document.body.style.backgroundColor = "white";
// }
