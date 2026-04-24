import fs from "fs/promises";
import { DB_PATH } from "./constants.js";

// console.log(DB_PATH);

// console.log(await fs.readFile(DB_PATH, { encoding: "utf-8" }));
const array = await fs.readFile(DB_PATH, "utf-8");

const parsedArray = JSON.parse(array);

console.log(parsedArray);

parsedArray.push({ name: "Olha" }, { name: "Jhon" }, { name: "Alona" });

console.log(parsedArray);

fs.appendFile(DB_PATH, JSON.stringify(parsedArray, null, 2));
