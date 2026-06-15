import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { versionKey: false },
);

export const Contact = model("Contact", contactSchema);
