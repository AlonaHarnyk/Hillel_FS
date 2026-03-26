import type { RootState } from "../store";

export const selectUsers = (state: RootState) => state.users.items;
export const selectIsLoading = (state: RootState) => state.users.isLoading;
export const selectIsError = (state: RootState) => state.users.isError;
