import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["new", "inProgress", "done"],
    default: "new",
  },
  deadline: {
    type: Date,
  },
});

export const Todo = model("Todo", todoSchema);
