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
    isUrgent: {
      type: Boolean,
      default: false,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true },
);

// todoSchema.index({ title: "text", description: "text" });

// todoSchema.index({ status: 1 });

// todoSchema.index({ status: 1, isUrgent: 1 });

export const Todo = model("Todo", todoSchema);
