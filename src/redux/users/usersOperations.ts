import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../services/usersApi";
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
