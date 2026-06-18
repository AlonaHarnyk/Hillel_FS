const socket = io();

const input = document.getElementById("input");
const button = document.getElementById("send");
const messages = document.getElementById("messages");

button.addEventListener("click", () => {
  const text = input.value;

  socket.emit("message", text);

  input.value = "";
});

socket.on("message", (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  messages.append(li);
});
