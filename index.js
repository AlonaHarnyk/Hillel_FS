import fs from "node:fs";

// console.log(1);

// Promise.resolve().then(() => {
//   console.log(4);
// });

// process.nextTick(() => {
//   console.log(3);
// });

// console.log(2);

// setTimeout(() => {
//   console.log(5);
// }, 0);

// fs.readFile("file.txt", () => {
//   console.log("file");
// });

// setImmediate(() => {
//   console.log("immediate");
// });

// fs.readFile("file.txt", () => {
//   setTimeout(() => {
//     console.log("timeout");
//   }, 0);
//   setImmediate(() => {
//     console.log("immediate");
//   });
// });

// const readableStream = fs.createReadStream("file.txt", {
//   encoding: "utf8",
//   highWaterMark: 50,
// });

// readableStream.on("data", (chunk) => {
//   console.log("____CHUNK____");
//   console.log(chunk);
// });

// const writableStream = fs.createWriteStream("random.txt");

// writableStream.write("Hello ");
// writableStream.write("world");
// writableStream.write("!!!");
// writableStream.end();

// const stream1 = fs.createReadStream("file.txt");
// const stream2 = fs.createWriteStream("copy.txt");

// stream1.pipe(stream2);
