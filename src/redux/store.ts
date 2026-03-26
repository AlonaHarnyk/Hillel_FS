import { configureStore } from "@reduxjs/toolkit";
import usersReducer, { type UsersState } from "./users/usersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  type PersistConfig,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<UsersState> = {
  key: "users",
  storage,
  whitelist: ["users"],
};

const persistedUserReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
