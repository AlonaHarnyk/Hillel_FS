import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("message", (text) => {
    console.log("Message from client:", text);

    io.emit("message", text);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running");
});
