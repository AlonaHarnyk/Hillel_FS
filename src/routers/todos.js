import { Router } from "express";
import { getTodos } from "../controllers/todo.js";

const router = Router();

router.get("/todos", getTodos);

export default router;
