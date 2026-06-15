import { Router } from "express";
import { updateContactPhoto } from "../controllers/contacts.js";
import { parseFile } from "../middlewares/handleFiles.js";

const router = Router();

router.patch("/", parseFile.single("photo"), updateContactPhoto);

export default router;
