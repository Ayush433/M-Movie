import React from "react";
import { useParams } from "react-router";
import { useGetMovieIdQuery } from "../Features/MovieSlice";

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
  console.log(data);
  return (
    <div>
      {data && (
        <div>
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
