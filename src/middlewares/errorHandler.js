import { HttpError } from "http-errors";
import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  const message =
    process.env.NODE_ENV === "production"
      ? "Something went wrong"
      : err.message;

  res.status(500).json({ message });
};
