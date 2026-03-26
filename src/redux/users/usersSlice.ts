import { createSlice } from "@reduxjs/toolkit";
import { getUsersOperation } from "./usersOperations";
import type { User } from "../../types/users";

interface UsersState {
  items: User[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: UsersState = {
  items: [],
  isLoading: false,
  isError: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsersOperation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.items = payload;
      })
      .addCase(getUsersOperation.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default usersSlice.reducer;
