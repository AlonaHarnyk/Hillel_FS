import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: true },
);

export const Todo = model("Todo", todoSchema);
