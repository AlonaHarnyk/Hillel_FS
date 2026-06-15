import { Joi, Segments } from "celebrate";
import { STATUSES } from "../constants/index.js";
import { validateId } from "./general.js";

export const getTodosSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(3).max(25).default(3),
    sortBy: Joi.string()
      .valid("title", "description", "status")
      .default("title"),
    sortOrder: Joi.string().valid("asc", "desc").default("asc"),
    status: Joi.string().valid(...STATUSES),
    minDays: Joi.number().integer(),
    maxDays: Joi.number().integer(),
    isUrgent: Joi.boolean(),
    search: Joi.string(),
  }),
};

export const createTodoSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(50).required().messages({
      "any.required": "Field title is required",
    }),
    description: Joi.string().min(2).max(350).required(),
    status: Joi.string().valid(...STATUSES),
    estimationInDays: Joi.number().integer().required(),
    isUrgent: Joi.boolean(),
  }),
};

export const updateTodoSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(50),
    description: Joi.string().min(2).max(350),
    status: Joi.string().valid(...STATUSES),
    estimationInDays: Joi.number().integer(),
    isUrgent: Joi.boolean(),
  }).min(1),
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(validateId).required(),
  }),
};
