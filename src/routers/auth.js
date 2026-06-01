import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";
import { celebrate } from "celebrate";
import { signInSchema, signUpSchema } from "../validation/auth.js";

const router = Router();

router.post("/sign-up", celebrate(signUpSchema), signUp);
router.post("/sign-in", celebrate(signInSchema), signIn);

export default router;
