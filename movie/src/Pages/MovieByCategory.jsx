import React from "react";
import { useParams } from "react-router";
import MovieShow from "../Components/MovieShow";
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";

const MovieByCategory = () => {
  const { category } = useParams();

  const { data, isError, isLoading } = useGetMovieByCategoryQuery(category);

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
    <>
      {" "}
      <MovieShow movies={data} />
    </>
  );
};

export default MovieByCategory;
