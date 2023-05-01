import { useGetMovieByCategoryQuery } from "../Features/MovieSlice";
import { useNavigate } from "react-router";
import MovieShow from "../Components/MovieShow";
const Home = () => {
  const { data, isError, isLoading } = useGetMovieByCategoryQuery("popular");
  const nav = useNavigate();

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

  if (!data) {
    return <p>An error has occurred</p>;
  }

  return (
    <div>
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
    </div>
  );
};
export default Home;
