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
        url: `/movie/${query}`,
        params: {
<<<<<<< HEAD
          api_key: "c2d354c99d9c0b20253394c45f497342", //2a0f926961d00c667e191a21c14461f8
=======
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
    getMovieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.path}`,
        params: {
          api_key: api_key,
          page: query.page,
        },
      }),
    }),

    getMovieId: builder.query({
      query: (movieId) => ({
        url: `/movie/${movieId}/videos`,

        params: {
          api_key: api_key,
>>>>>>> movie-toolkit
        },
      }),
    }),
  }),
});
<<<<<<< HEAD
export const { useGetMovieByCategoryQuery } = MovieSlice;
=======
export const {
  useGetMovieByCategoryQuery,
  useGetSearchMoviesQuery,
  useGetMovieIdQuery,
  useGetMovieByPageQuery,
} = MovieSlice;
>>>>>>> movie-toolkit
