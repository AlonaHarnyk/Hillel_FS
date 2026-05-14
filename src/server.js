import express from "express";
import usersRouter from "./routers/users.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = 8000;

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Method: ${req.method}, url: ${req.url}`);
//   next();
// });

// app.get("/", (req, res) => {
//   console.log("Hello!");
//   res.json({ message: "Hello!" });
// });

app.use(usersRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error with server starting!");
    return;
  }
  console.log(`Server in running at port ${PORT}`);
});

export default app;
