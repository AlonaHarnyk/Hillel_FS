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

router.get("/", celebrate(getTodosSchema), getTodos);
router.get("/:id", celebrate(idSchema), getTodoById);
router.post("/", celebrate(createTodoSchema), addTodo);
router.delete("/:id", celebrate(idSchema), deleteTodo);
router.patch("/:id", celebrate(updateTodoSchema), updateTodo);
router.put(
  "/:id",
  celebrate(createTodoSchema),
  celebrate(idSchema),
  updateOrCreate,
);

export default router;
