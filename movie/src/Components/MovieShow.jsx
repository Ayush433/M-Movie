import React from "react";

const MovieShow = ({ movies }) => {
  return (
    <div>
      <div className="grid grid-cols-5 p-4 gap-5">
        {movies &&
          movies.results.map((movie) => {
            return (
              <div key={movie.id} className="shadow-2xl">
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
