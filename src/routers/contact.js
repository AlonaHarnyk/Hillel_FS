import { Router } from "express";
import { updateContactPhoto } from "../controllers/contacts.js";
import { parseFile } from "../middlewares/handleFiles.js";
import { celebrate } from "celebrate";
import { idSchema } from "../validation/general.js";

const router = Router();

router.patch(
  "/:id",
  celebrate(idSchema),
  parseFile.single("photo"),
  updateContactPhoto,
);

export default router;
