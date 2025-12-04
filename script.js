// for (let i = 1; i <= 3; i += 1) {
//   console.log(i);
// }

// console.log("test");

// for (let i = 1; i <= 100; i += 20) {
//   console.log(i);
// }

// console.log("test");

// for (let i = 100; i >= 20; i -= 30) {
//   console.log(i);
// }

// console.log("test");

// const word = "javascript";
// let word2 = "";

// for (let i = 0; i < word.length; i += 1) {
//   // console.log(word[i]);
//   word2 += word[i];
// }

// console.log(word2);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 15; i += 1) {
//   if (i / 3 === 4 || i / 2 === 5) {
//     continue;
//   }
//   console.log(i);
// }

// const a = "test";

// const array = [1, 2, 3, "a", "b", a, true];

// console.log(array.length);

// console.log(array[5]);

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// for (let item of array) {
//   console.log(item);
//   //   if (item === "a") {
//   //     break;
//   //   }
// }

// const b = 5;
// const c = 5;
// console.log(b === c); //true
// const d = b;
// console.log(d === b); //true

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// // console.log(arr1 === arr2); // false
// // console.log([1, 2, 3] === [1, 2, 3]); // false
// const arr3 = arr1;
// // console.log(arr3 === arr1); // true

// arr1[0] = 10;
// console.log(arr1); // [10, 2, 3]
// console.log(arr3); // [10, 2, 3]

// arr3[2] = 5;

// console.log(arr1); // [10, 2, 5]

// arr1.length = 0;

// console.log(arr1); // []
// console.log(arr3); // []

// arr1[5] = 100;

// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[200]);

// let arr4 = [1, 3, 5];
// let arr5 = arr4;

// // console.log(arr4 == arr5);

// arr4 = [4, 5, 6];

// // console.log(arr4); // [4, 5, 6]
// // console.log(arr5); // [1, 3, 5]

// // console.log(arr4 == arr5); // false

// arr5 = arr4;

// console.log(arr4); // [4, 5, 6]
// console.log(arr5); // [4, 5, 6]

// console.log(arr4 == arr5); // true

// const e = [1, 2, [3, 4]];
// const f = [1, 2, [3, 4]];

// // console.log(e === f);

// // console.log(e[0] === f[0]); // true
// // console.log(e[2] === f[2]); // false

// console.log(e[2][0]); // 3

// String method

// split

// const string = "t-e-s-t";
// console.log(string.split("-")); // ['t', 'e', 's', 't']

// ❗️❗️❗️ Array methods

// // join
// const arr6 = ["a", "b", "c"];
// console.log(arr6.join("")); // 'abc'

// includes
// console.log(arr6.includes("a")); // true
// console.log(arr6.includes("y")); // false

// // indexOf
// console.log(arr6.indexOf("a")); // 0
// console.log(arr6.indexOf("y")); // -1

// push
const arr7 = [];
const length = arr7.push(1, 2, 3);
// console.log(arr7); // [1, 2, 3]
// console.log(length); // 3

// pop
const elem = arr7.pop();
// console.log(arr7); // [1, 2]
// console.log(elem); // 3

// unshift
const length1 = arr7.unshift(5, 6, 7);
// console.log(arr7); // [5, 6, 7, 1, 2]
// console.log(length1); // 5

// shift
const elem1 = arr7.shift();
// console.log(arr7); // [6, 7, 1, 2]
// console.log(elem1); // 5

// slice
// const arr8 = arr7.slice(0, 2);
// console.log(arr7); // [6, 7, 1, 2]
// console.log(arr8); // [6, 7]

// splice
// const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deleted = arr9.splice(5, 2);
// console.log(arr9); // [1, 2, 3, 4, 5, 8, 9]
// console.log(deleted); // [6, 7]

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleted1 = arr10.splice(5, 0, 11, 12, 13, 14, 15);
// console.log(arr10); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 6, 7, 8, 9]
// console.log(deleted1); // []

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleted2 = arr11.splice(5, 2, 11, 12);
// console.log(arr11); //[1, 2, 3, 4, 5, 11, 12, 8, 9]
// console.log(deleted2); //[6, 7]
