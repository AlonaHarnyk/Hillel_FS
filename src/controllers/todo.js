import { Todo } from "../db/models/Todo.js";
import createHttpError from "http-errors";

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
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
  const newTodo = await Todo.create(body);
  res.status(201).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.findByIdAndDelete(id);
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
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    returnDocument: "after",
  });
  if (!updatedTodo) {
    // res.status(404).json({ message: "Todo not found!" });
    // return;
    throw createHttpError(404, "Todo not found!");
  }
  res.json(updatedTodo);
};

export const updateOrCreate = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await Todo.findByIdAndUpdate(id, body, {
    returnDocument: "after",
    upsert: true,
    includeResultMetadata: true,
  });

  const isUpdated = result.lastErrorObject.updatedExisting;
  res.status(isUpdated ? 200 : 201).json(result.value);
};
