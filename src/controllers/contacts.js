import createHttpError from "http-errors";
import { saveFile } from "../utils/cloudinary.js";
import { updatePhoto } from "../services/contacts.js";

export const updateContactPhoto = async (req, res) => {
  if (!req.file) {
    throw createHttpError(400, "No file");
  }
  const { secure_url } = await saveFile(req.file.buffer);

  const { id } = req.params;

  const contact = await updatePhoto(id, { photo: secure_url });

  if (!contact) {
    throw createHttpError(404, "Contact not found!");
  }

  res.json(contact);
};
