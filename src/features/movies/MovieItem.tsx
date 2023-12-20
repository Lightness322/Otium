import { useState } from "react";
import { useNavigate } from "react-router";

import { IMovie } from "./types/IMovie";

import MovieItemUpdateButtons from "./MovieItemUpdateButtons";
import MovieItemYear from "./MovieItemYear";
import MovieItemRatings from "./MovieItemRatings";

interface IMovieItemProps {
  movie: IMovie;
}

const MovieItem: React.FC<IMovieItemProps> = ({ movie }) => {
  const {
    kinopoiskId: movieId,
    nameOriginal,
    posterUrlPreview: posterUrl,
    ratingImdb,
    ratingKinopoisk,
    nameRu,
    year,
  } = movie;

  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-[206px] rounded-md p-3 hover:cursor-pointer hover:bg-hover-color max-[863px]:w-[180px] max-[579px]:w-[150px] max-[489px]:w-[180px] max-[399px]:w-[200px]"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof Element && !e.target.closest("button")) {
          navigate(`${movieId}`);
        }
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative">
        <MovieItemUpdateButtons movie={movie} isHover={isHover} />
        <MovieItemYear year={year} isHover={isHover} />
        <img
          className={`h-[calc((206-24)*1.5px)] w-full object-cover ${
            isHover ? "brightness-[35%] contrast-[70%] filter" : ""
          } max-[863px]:h-[calc((180-24)*1.5px)] max-[579px]:h-[calc((150-24)*1.5px)] max-[489px]:h-[calc((180-24)*1.5px)] max-[399px]:h-[calc((200-24)*1.5px)]`}
          src={`${posterUrl}`}
        />
        <MovieItemRatings
          ratingImdb={ratingImdb}
          ratingKinopoisk={ratingKinopoisk}
        />
      </div>
      <div
        className="mt-1 text-lg font-medium max-[820px]:text-base"
        key={movieId}
      >
        {nameRu ? nameRu : nameOriginal}
      </div>
    </div>
  );
};

export default MovieItem;
