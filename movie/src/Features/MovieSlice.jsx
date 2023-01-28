import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "2a0f926961d00c667e191a21c14461f8";
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
          api_key: api_key,
        },
      }),
    }),

    getSearchMovies: builder.query({
      query: (searchText) => ({
        url: "/search/movie",
        params: {
          api_key: api_key,
          query: searchText,
        },
      }),
    }),
  }),
});
export const { useGetMovieByCategoryQuery, useGetSearchMoviesQuery } =
  MovieSlice;
