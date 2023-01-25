import { configureStore } from "@reduxjs/toolkit";

import { MovieSlice } from "./MovieSlice";

export const store = configureStore({
  reducer: {
    [MovieSlice.reducerPath]: MovieSlice.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat([MovieSlice.middleware]),
});
