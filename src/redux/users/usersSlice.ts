import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/users";

export interface UsersState {
  users: User[];
  test: number;
}

const initialState: UsersState = {
  users: [],
  test: 100,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: ({ users }, action: PayloadAction<User>) => {
      users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
