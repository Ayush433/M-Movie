import React from "react";
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";

const Home = () => {
  const { data, isError, isLoading } = useGetMovieByCategoryQuery("popular");
  console.log(data);
  if (isLoading) {
    return (
      <div>
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_x62chJ.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }

  return (
    <div>
      {data &&
        data.results.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
