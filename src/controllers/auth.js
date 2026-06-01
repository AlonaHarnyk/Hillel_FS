import createHttpError from "http-errors";
import {
  createSession,
  createUser,
  findUserByEmail,
} from "../services/auth.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await findUserByEmail(email);

  if (user) {
    throw createHttpError(409, "User with such email already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser({ name, email, password: hashedPassword });

  await createSession(newUser._id);

  res.status(201).json({ name: newUser.name, email: newUser.email });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    throw createHttpError(401, "Invalid credentials");
  }

  const arePasswordsEqual = await bcrypt.compare(password, user.password);

  if (!arePasswordsEqual) {
    throw createHttpError(401, "Invalid credentials");
  }

  await createSession(user._id);

  res.status(200).json({ name: user.name, email });
};
