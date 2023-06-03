import React from "react";
import { useNavigate } from "react-router";
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";
const MovieShow = ({ movies }) => {
  const nav = useNavigate();
  return (
    <div className="">
      <div className="grid grid-cols-5 p-4 gap-5 items-start md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 ">
        {movies &&
          movies.results.map((movie) => {
            return (
              <div
                key={movie.id}
                onClick={() => {
                  nav(`/movie/${movie.id}`);
                }}
                className="shadow-2xl hover:scale-110 ease-in duration-300 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                  alt=""
                />
                <div className="p-2">
                  <h1 className="text-xl font-semibold">{movie.title}</h1>
                </div>
                <p>{movie.overview.substring(0, 100) + "...."}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieShow;
