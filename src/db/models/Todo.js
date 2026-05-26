import { Schema, model } from "mongoose";
import { STATUSES } from "../../constants/index.js";

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
      enum: STATUSES,
      default: "new",
    },
    estimationInDays: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const Todo = model("Todo", todoSchema);
