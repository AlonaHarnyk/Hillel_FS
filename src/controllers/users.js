import fs from "node:fs/promises";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "db", "users.json");

export const getUsers = async (req, res) => {
  const users = await fs.readFile(DB_PATH, "utf-8");
  const parsedUsers = JSON.parse(users);
  res.json(parsedUsers);
};

export const getUserById = async (req, res) => {
  const users = await fs.readFile(DB_PATH, "utf-8");
  const parsedUsers = JSON.parse(users);
  const { userId } = req.params;
  const user = parsedUsers.find(({ id }) => id === Number(userId));
  if (!user) {
    // res.status(404);
    // res.json({ message: "User not found!" });
    res.status(404).json({ message: "User not found!" });
    return;
  }
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const users = await fs.readFile(DB_PATH, "utf-8");
  const parsedUsers = JSON.parse(users);
  const { userId } = req.params;
  const filteredUsers = parsedUsers.filter(
    (user) => user.id !== Number(userId),
  );
  if (filteredUsers.length === parsedUsers.length) {
    res.status(404).json({ message: "User not found!" });
    return;
  }
  await fs.writeFile(DB_PATH, JSON.stringify(filteredUsers, null, 2));
  res.json({ message: "Deleted successfully!" });
  // res.status(204).end();
  // res.sendStatus(204);
};

export const addUser = async (req, res) => {
  const body = req.body;
  const user = { id: Date.now(), ...body };
  const users = await fs.readFile(DB_PATH, "utf-8");
  const parsedUsers = JSON.parse(users);
  const newUsers = [...parsedUsers, user];
  await fs.writeFile(DB_PATH, JSON.stringify(newUsers, null, 2));
  res.status(201).json(user);
};

export const patchUser = async (req, res) => {
  const users = await fs.readFile(DB_PATH, "utf8");
  const parsedUsers = JSON.parse(users);
  const { userId } = req.params;

  const user = parsedUsers.find(({ id }) => id === Number(userId));
  if (!user) {
    // res.status(404);
    // res.json({ message: "User not found!" });
    res.status(404).json({ message: "User not found!" });
    return;
  }
  const body = req.body;
  const editedUser = {
    ...user,
    ...body,
  };
  const updatedUsers = parsedUsers.map((user) =>
    user.id === Number(userId) ? editedUser : user,
  );
  await fs.writeFile(DB_PATH, JSON.stringify(updatedUsers, null, 2));
  res.json(editedUser);
};
