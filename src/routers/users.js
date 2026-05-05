import { Router } from "express";

import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  patchUser,
} from "../controllers/users.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:userId", getUserById);

router.delete("/users/:userId", deleteUser);

router.post("/users", addUser);

router.patch("/users/:userId", patchUser);

export default router;
