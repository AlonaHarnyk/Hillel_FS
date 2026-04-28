import fs from "fs/promises";
import path from "node:path";
import { DB_PATH, DB_FOLDER_PATH } from "./constants.js";
import yargs from "yargs";

// console.log(process.argv.slice(2));

// const getUserData = () => {
//   const data = process.argv.slice(2);
//   const name = data[0];
//   const age = data[1];
//   const user = { name, age };
//   console.log(user);
// };

// getUserData();

// const argv = yargs(process.argv.slice(2)).parse();

// const { name, age } = argv;

// console.log(name, age);

// const users = [
//   { name: "Olha", age: 10 },
//   { name: "Yana", age: 20 },
//   { name: "Iryna", age: 30 },
// ];

// await fs.writeFile(DB_PATH, JSON.stringify(users, null, 2));

const createUsersFiles = async () => {
  try {
    const users = await fs.readFile(DB_PATH, "utf-8");
    const parsedUsers = JSON.parse(users);
    parsedUsers.forEach((user) => {
      const fileName = `${user.name.toLowerCase()}.json`;
      const filePath = path.join(DB_FOLDER_PATH, fileName);
      fs.writeFile(filePath, JSON.stringify(user, null, 2));
    });
  } catch (error) {
    console.log(error);
  }
};

createUsersFiles();
