import { Router } from "express";
import { celebrate } from "celebrate";
import {
  addTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateOrCreate,
  updateTodo,
} from "../controllers/todo.js";
import {
  createTodoSchema,
  getTodosSchema,
  idSchema,
  updateTodoSchema,
} from "../validation/todo.js";

const router = Router();

router.get("/todos", celebrate(getTodosSchema), getTodos);
router.get("/todos/:id", celebrate(idSchema), getTodoById);
router.post("/todos", celebrate(createTodoSchema), addTodo);
router.delete("/todos/:id", celebrate(idSchema), deleteTodo);
router.patch("/todos/:id", celebrate(updateTodoSchema), updateTodo);
router.put(
  "/todos/:id",
  celebrate(createTodoSchema),
  celebrate(idSchema),
  updateOrCreate,
);

export default router;
