import type { AuthData, User } from "../types/auth";
import { api } from "./api";

export const registerUser = async (authData: AuthData) => {
  const { data } = await api.post<User>("/auth/register", authData);
  return data;
};

export const loginUser = async (authData: AuthData) => {
  const { data } = await api.post<User>("/auth/login", authData);
  return data;
};

export const logoutUser = () => {
  api.post("/auth/logout");
};

export const getCurrentUser = async () => {
  const { data } = await api.get<User>("/users/current");
  return data;
};
