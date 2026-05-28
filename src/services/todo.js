import { Todo } from "../db/models/Todo.js";

export const getTodosService = async ({
  page = 1,
  perPage = 3,
  sortBy = "title",
  sortOrder = "asc",
  status,
  minDays,
  maxDays,
  isUrgent,
  search,
}) => {
  const skip = (page - 1) * perPage;

  const todosQuery = Todo.find();

  // const indexes = await Todo.collection.indexes();

  // console.log(indexes);

  // if (search && search.trim()) {
  //   todosQuery.where({
  //     $text: {
  //       $search: search,
  //     },
  //   });
  // }

  // if (search && search.trim()) {
  //   todosQuery.where({
  //     title: { $regex: search, $options: "i" },
  //   });
  // }

  if (search && search.trim()) {
    todosQuery.where({
      $or: [
        {
          title: { $regex: search, $options: "i" },
        },
        {
          description: { $regex: search, $options: "i" },
        },
      ],
    });
  }

  if (status) {
    todosQuery.where("status").equals(status);
  }

  if (isUrgent !== undefined) {
    todosQuery.where("isUrgent").equals(isUrgent);
  }

  if (minDays) {
    // todosQuery.where("estimationInDays").gt(minDays);
    todosQuery.where("estimationInDays").gte(minDays);
  }

  if (maxDays) {
    // todosQuery.where("estimationInDays").lt(maxDays);
    todosQuery.where("estimationInDays").lte(maxDays);
  }

  // // const totalCount = await Todo.find().countDocuments();
  // // const todos = await Todo.find().skip(skip).limit(perPage);

  const [totalCount, todos] = await Promise.all([
    todosQuery.clone().countDocuments(),
    todosQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder }),
  ]);

  const totalPages = Math.ceil(totalCount / perPage);

  // return { todos, totalCount, totalPages, page, perPage };
  return { todos, totalCount, totalPages };
};

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
