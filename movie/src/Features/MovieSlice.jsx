import { createAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `movie/${query}`,
        params: {
          api_key: "2a0f926961d00c667e191a21c14461f8",
        },
      }),
    }),
  }),
});
export const useGetMovieByCategoryQuery = MovieSlice.useGetMovieByCategoryQuery;
