import { connect } from "mongoose";
import { Todo } from "./models/Todo.js";

export const connectDb = async () => {
  const DB_URL = process.env.DB_URL;
  try {
    await connect(DB_URL);
    console.log("Connected to DB successfully!");
    // await Todo.syncIndexes();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
