import React from "react";
import { useParams } from "react-router";
import { useGetMovieIdQuery } from "../Features/MovieSlice";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetMovieIdQuery(id);

  if (isLoading) {
    return (
      <div className=" w-[600px] items-center">
        <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_tcux3hw6.json"
          background="transparent"
          speed="1"
          autoplay
        ></lottie-player>
      </div>
    );
  }

  return (
    <div>
      {data && data.results && data.results[0] && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-screen"
        >
          <iframe
            className="w-[60%] aspect-video p-5"
            src={`https://www.youtube.com/embed/${data.results[0]?.key}`}
            allowFullScreen
            autoplay
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Detail;
