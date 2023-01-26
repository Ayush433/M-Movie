import React from "react";
import MovieShow from "../Components/MovieShow";
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
      <MovieShow movies={data} />
    </div>
  );
};

export default Home;
