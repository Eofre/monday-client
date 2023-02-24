import { configureStore } from "@reduxjs/toolkit";
import { educationalBlockApi } from "./educationBlock/educationalBlock.api";

export const store = configureStore({
  reducer: {
    [educationalBlockApi.reducerPath]: educationalBlockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(educationalBlockApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
