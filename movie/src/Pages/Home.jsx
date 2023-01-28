import React, { Suspense } from "react";
import MovieShow from "../Components/MovieShow";
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";

const Home = () => {
  const { data, isError, isLoading } = useGetMovieByCategoryQuery("popular");

  if (isLoading) {
    return (
      <div>
        <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_tcux3hw6.json"
          background="transparent"
          speed="1"
          controls
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
