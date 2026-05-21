import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateOrCreate,
  updateTodo,
} from "../controllers/todo.js";

const router = Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", addTodo);
router.delete("/todos/:id", deleteTodo);
router.patch("/todos/:id", updateTodo);
router.put("/todos/:id", updateOrCreate);

export default router;
