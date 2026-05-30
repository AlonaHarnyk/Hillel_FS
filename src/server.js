import express from "express";
import authRouter from "./routers/auth.js";
import todosRouter from "./routers/todos.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connectDb } from "./db/connectDb.js";
import "dotenv/config";
import { errors } from "celebrate";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/todos", todosRouter);

app.use(notFoundHandler);

app.use(errors());
app.use(errorHandler);

await connectDb();

app.listen(PORT, () => {
  console.log(`Server in running at port ${PORT}`);
});

export default app;
