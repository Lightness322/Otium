import { useUpdateViewedMovies } from "./useUpdateViewedMovies";
import { useUpdateWishlistMovies } from "./useUpdateWishlistMovies";

import { IMovie } from "./types/IMovie";

import UpdateViewedOrPlayedButton from "../../ui/UpdateViewedOrPlayedButton";
import UpdateWishlistButton from "../../ui/UpdateWishlistButton";

interface IMovieItemUpdateButtonsProps {
  movie: IMovie;
  isHover: boolean;
}

const MovieItemUpdateButtons: React.FC<IMovieItemUpdateButtonsProps> = ({
  movie,
  isHover,
}) => {
  const { kinopoiskId: movieId } = movie;

  const { handleViewedMoviesUpdate, isViewed, isViewedLoading } =
    useUpdateViewedMovies(movieId);

  const { handleWishlistMoviesUpdate, isInWishlist, isWishlistLoading } =
    useUpdateWishlistMovies(movie);

  return (
    <>
      <UpdateViewedOrPlayedButton
        className="absolute left-0 top-0 z-10 h-10 w-10 bg-transparent p-1 opacity-50 hover:opacity-100"
        updateFunction={handleViewedMoviesUpdate}
        isPlayedOrViewed={isViewed}
        isLoading={isViewedLoading}
        isMovieItemHover={isHover}
        type="movie"
      />
      {!isViewed && (
        <UpdateWishlistButton
          className="absolute right-0 top-0 z-10 h-10 w-10 bg-transparent p-1 opacity-50 hover:opacity-100"
          updateFunction={handleWishlistMoviesUpdate}
          isInWishlist={isInWishlist}
          isLoading={isWishlistLoading}
          isMovieItemHover={isHover}
        />
      )}
    </>
  );
};

export default MovieItemUpdateButtons;
