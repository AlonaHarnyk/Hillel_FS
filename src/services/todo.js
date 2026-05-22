import { Todo } from "../db/models/Todo.js";

export const getTodosService = () => Todo.find();

export const getTodosServiceById = (id) => Todo.findById(id);

export const addTodoService = (todoData) => Todo.create(todoData);

export const deleteTodoService = (id) => Todo.findByIdAndDelete(id);

export const updateTodoService = async (id, todoData, options) => {
  const result = await Todo.findByIdAndUpdate(id, todoData, {
    returnDocument: "after",
    includeResultMetadata: true,
    ...options,
  });

  if (!result.value) {
    return null;
  }

  return {
    data: result.value,
    isUpdated: result.lastErrorObject.updatedExisting,
  };
};
