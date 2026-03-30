import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteUserOperation, getUsersOperation } from "./usersOperations";
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

// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(getUsersOperation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getUsersOperation.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.items = payload;
//       })
//       .addCase(getUsersOperation.rejected, (state) => {
//         state.isLoading = false;
//         state.isError = true;
//       })
//       .addCase(deleteUserOperation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteUserOperation.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.items = state.items.filter((item) => item.id !== payload.id);
//       })
//       .addCase(deleteUserOperation.rejected, (state) => {
//         state.isLoading = false;
//         state.isError = true;
//       }),
// });

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsersOperation.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteUserOperation.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(getUsersOperation.pending, deleteUserOperation.pending),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(getUsersOperation.rejected, deleteUserOperation.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      )
      .addMatcher(
        isAnyOf(getUsersOperation.fulfilled, deleteUserOperation.fulfilled),
        (state) => {
          state.isLoading = false;
          state.isError = false;
        },
      ),
});

export default usersSlice.reducer;
