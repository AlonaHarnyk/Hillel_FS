import express from "express";
import todosRouter from "./routers/todos.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connectDb } from "./db/connectDb.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(todosRouter);

app.use(notFoundHandler);

app.use(errorHandler);

await connectDb();

app.listen(PORT, () => {
  console.log(`Server in running at port ${PORT}`);
});

export default app;
