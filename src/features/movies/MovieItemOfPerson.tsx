import { useState } from "react";
import { useNavigate } from "react-router";
import { useUpdateViewedMovies } from "./useUpdateViewedMovies";

import { IMovieOfPerson } from "./types/IStaffPersonDetails";

import UpdateViewedOrPlayedButton from "../../ui/UpdateViewedOrPlayedButton";

interface IMovieItemOfPersonProps {
  movie: IMovieOfPerson;
}

const MovieItemOfPerson: React.FC<IMovieItemOfPersonProps> = ({ movie }) => {
  const [isMovieItemHover, setIsMovieItemHover] = useState<boolean>(false);

  const navigate = useNavigate();

  const { filmId: movieId, nameRu, nameEn: nameOriginal, rating } = movie;

  const { handleViewedMoviesUpdate, isViewed, isViewedLoading } =
    useUpdateViewedMovies(movieId);

  return (
    <li
      className="relative flex min-h-[92px] items-center justify-between rounded-md p-3 hover:cursor-pointer hover:outline hover:outline-font-secondary-color [&:nth-child(2n)]:outline [&:nth-child(2n)]:outline-hover-color [&:nth-child(2n)]:hover:outline-font-secondary-color [&:nth-child(2n-1)]:bg-hover-color"
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        if (e.target instanceof Element && !e.target.closest("button")) {
          navigate(`/movies/${movieId}`);
        }
      }}
      onMouseEnter={() => setIsMovieItemHover(true)}
      onMouseLeave={() => setIsMovieItemHover(false)}
    >
      <div>
        <UpdateViewedOrPlayedButton
          className="absolute right-0 top-0 h-10 w-10 opacity-75 hover:opacity-100"
          updateFunction={handleViewedMoviesUpdate}
          isPlayedOrViewed={isViewed}
          isLoading={isViewedLoading}
          isMovieItemHover={isMovieItemHover}
          themeColor={true}
          bg={false}
          type="movie"
          size="22"
        />
        <div>{nameRu}</div>
        <div className="text-sm text-font-secondary-color">{nameOriginal}</div>
      </div>
      <div className="font-titles pl-[2px] text-xl font-semibold">{rating}</div>
    </li>
  );
};

export default MovieItemOfPerson;
