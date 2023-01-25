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
        url: `/movie/${query}`,
        params: {
          api_key: "c2d354c99d9c0b20253394c45f497342", //2a0f926961d00c667e191a21c14461f8
        },
      }),
    }),
  }),
});
export const { useGetMovieByCategoryQuery } = MovieSlice;
