import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const [category, setCategory] = useState("top_rated");

  const getMovieData = async (cate) => {
    try {
      setLoad(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${cate}`,
        {
          params: {
            api_key: "2a0f926961d00c667e191a21c14461f8",
          },
        }
      );
      setLoad(false);
      setMovie(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieData(category); // jaba Change some click hunxa Category call hunxa ani hamle SetCategory mah popular through api deko varw mathi api mah automatically popular call hunxa
  }, [category]);

  if (load) {
    return <h1 className="text-2xl">Loading.....</h1>;
  }

  return (
    <>
      <button
        onClick={() => {
          setCategory("popular"); // api  anusar popular key  thiyo teo anusar ho
        }}
        className="bg-black text-white p-2"
      >
        Change Some
      </button>

      <div className="grid grid-cols-4 gap-7">
        {movie &&
          movie.map((m) => {
            return (
              <div key={m.id}>
<<<<<<< HEAD
                <h1>{m.title}</h1>
=======
>>>>>>> movie-toolkit
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${m.poster_path}`}
                  alt=""
                />
<<<<<<< HEAD
=======
                <h1>{m.title}</h1>
>>>>>>> movie-toolkit
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dashboard;
