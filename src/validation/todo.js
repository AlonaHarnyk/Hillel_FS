import { Joi, Segments } from "celebrate";
import { STATUSES } from "../constants/index.js";
import { isValidObjectId } from "mongoose";

const validateId = (id, utils) =>
  isValidObjectId(id) ? id : utils.message("Invalid id!");

export const createTodoSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(50).required().messages({
      "any.required": "Field title is required",
    }),
    description: Joi.string().min(2).max(350).required(),
    status: Joi.string().valid(...STATUSES),
  }),
};

export const updateTodoSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(50),
    description: Joi.string().min(2).max(350),
    status: Joi.string().valid(...STATUSES),
  }).min(1),
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(validateId).required(),
  }),
};

export const idSchema = {
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(validateId).required(),
  }),
};
