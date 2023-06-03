import React, { Suspense } from "react";
import { useLocation, useNavigate } from "react-router";
import MovieShow from "../Components/MovieShow";
import { useGetMovieByPageQuery } from "../Features/MovieSlice";

const PageQuery = () => {
  const nav = useNavigate();
  const { state = {} } = useLocation();
  console.log(state);
  const { data, isError, isLoading } = useGetMovieByPageQuery({
    path: state?.path,
    page: state?.page,
  });

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
      <button
        onClick={() => {
          nav("/movie/" + (data?.page || 1), {
            state: {
              path: state.path,
              page: data.page + 1,
            },
          });
        }}
        className="bg-cyan-700 p-2"
      >
        {" "}
        Next Movie{" "}
      </button>
    </div>
  );
};

export default PageQuery;
