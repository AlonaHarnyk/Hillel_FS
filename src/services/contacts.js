import { Contact } from "../db/models/Contact.js";

export const updatePhoto = (id, urlData) =>
  Contact.findByIdAndUpdate(id, urlData, { returnDocument: "after" });
