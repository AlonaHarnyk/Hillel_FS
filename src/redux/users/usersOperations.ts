import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUser, getUsers } from "../../services/usersApi";
import type { User } from "../../types/users";

export const getUsersOperation = createAsyncThunk<User[], void>(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await getUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteUserOperation = createAsyncThunk<User, User["id"]>(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const user = await deleteUser(id);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
