<<<<<<< HEAD
import React from "react";
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";

const Home = () => {
  const { data, isError, isLoading } = useGetMovieByCategoryQuery("popular");
  console.log(data);
=======
import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";
import { useNavigate } from "react-router";
import MovieShow from "../Components/MovieShow";
const Home = () => {
  const { data, isError, isLoading } = useGetMovieByCategoryQuery("popular");
  const nav = useNavigate();

>>>>>>> movie-toolkit
  if (isLoading) {
    return (
      <div>
        <lottie-player
<<<<<<< HEAD
          src="https://assets1.lottiefiles.com/packages/lf20_x62chJ.json"
          background="transparent"
          speed="1"
          loop
=======
          src="https://assets5.lottiefiles.com/private_files/lf30_tcux3hw6.json"
          background="transparent"
          speed="1"
          controls
>>>>>>> movie-toolkit
          autoplay
        ></lottie-player>
      </div>
    );
<<<<<<< HEAD
=======
  }

  if (!data) {
    return <p>An error has occurred</p>;
>>>>>>> movie-toolkit
  }

  return (
    <div>
<<<<<<< HEAD
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
=======
      <MovieShow movies={data} />
      <button
        onClick={() => {
          nav(`/movie/${data?.page}`, {
            state: {
              path: "popular",
              page: data.page + 1,
            },
          });
        }}
        className="bg-cyan-700 p-2"
      >
        {" "}
        Next Movie{" "}
      </button>
>>>>>>> movie-toolkit
    </div>
  );
};
export default Home;
