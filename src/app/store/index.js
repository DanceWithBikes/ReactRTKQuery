import { configureStore } from "@reduxjs/toolkit";
import RepositoriesAPI from "@features/repositories/model/api";

export const store = configureStore({
  reducer: {
    [RepositoriesAPI.reducerPath]: RepositoriesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RepositoriesAPI.middleware),
});
