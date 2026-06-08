import { Todo } from "../db/models/Todo.js";
import createHttpError from "http-errors";
import {
  addTodoService,
  deleteTodoService,
  getTodosService,
  getTodosServiceById,
  updateTodoService,
} from "../services/todo.js";

export const getTodos = async (req, res) => {
  const {
    page,
    perPage,
    sortBy,
    sortOrder,
    status,
    minDays,
    maxDays,
    isUrgent,
    search,
  } = req.query;
  const authorId = req.user._id;
  const response = await getTodosService({
    page,
    perPage,
    sortBy,
    sortOrder,
    status,
    minDays,
    maxDays,
    isUrgent,
    search,
    authorId,
  });
  res.json(response);
};

export const getTodoById = async (req, res) => {
  const { id } = req.params;
  const authorId = req.user._id;
  const todo = await getTodosServiceById(id, authorId);
  // if (todo === null) {
  if (!todo) {
    // res.status(404).json({ message: "Todo not found!" });
    // return;

    throw createHttpError(404, "Todo not found!");
  }
  res.json(todo);
};

export const addTodo = async (req, res) => {
  const body = req.body;
  const authorId = req.user._id;
  const newTodo = await addTodoService({ ...body, authorId });
  res.status(201).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const authorId = req.user._id;
  const deletedTodo = await deleteTodoService(id, authorId);
  if (!deletedTodo) {
    // res.status(404).json({ message: "Todo not found!" });
    // return;
    throw createHttpError(404, "Todo not found!");
  }
  res.json(deletedTodo);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const authorId = req.user._id;
  // const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
  //   returnDocument: "after",
  // });

  const result = await updateTodoService(id, authorId, body);
  if (!result) {
    // res.status(404).json({ message: "Todo not found!" });
    // return;
    throw createHttpError(404, "Todo not found!");
  }
  res.json(result.data);
};

export const updateOrCreate = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const authorId = req.user._id;
  // const result = await Todo.findByIdAndUpdate(id, body, {
  //   returnDocument: "after",
  //   upsert: true,
  //   includeResultMetadata: true,
  // });

  const { data, isUpdated } = await updateTodoService(id, authorId, body, {
    upsert: true,
  });

  res.status(isUpdated ? 200 : 201).json(data);
};
