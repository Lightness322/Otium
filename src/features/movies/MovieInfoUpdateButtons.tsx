import { useUpdateViewedMovies } from "./useUpdateViewedMovies";
import { useUpdateWishlistMovies } from "./useUpdateWishlistMovies";

import { IMovieDetails } from "./types/IMovieDetails";

import UpdateViewedOrPlayedButton from "../../ui/UpdateViewedOrPlayedButton";
import UpdateWishlistButton from "../../ui/UpdateWishlistButton";

interface IMovieInfoUpdateButtonsProps {
  movieDetails: IMovieDetails;
}

const MovieInfoUpdateButtons: React.FC<IMovieInfoUpdateButtonsProps> = ({
  movieDetails,
}) => {
  const { kinopoiskId: movieId } = movieDetails;

  const { handleViewedMoviesUpdate, isViewed, isViewedLoading } =
    useUpdateViewedMovies(movieId);

  const { handleWishlistMoviesUpdate, isInWishlist, isWishlistLoading } =
    useUpdateWishlistMovies(movieDetails);

  return (
    <div className="flex gap-x-5">
      <UpdateViewedOrPlayedButton
        className="h-12 w-12 rounded-md bg-transparent p-1 hover:bg-hover-color"
        updateFunction={handleViewedMoviesUpdate}
        isPlayedOrViewed={isViewed}
        isLoading={isViewedLoading}
        themeColor={true}
        size="35"
        type="movie"
      />
      {!isViewed && (
        <UpdateWishlistButton
          className="h-12 w-12 translate-y-[2px] rounded-md bg-transparent p-1 hover:bg-hover-color"
          updateFunction={handleWishlistMoviesUpdate}
          isInWishlist={isInWishlist}
          isLoading={isWishlistLoading}
          themeColor={true}
          size="40"
        />
      )}
    </div>
  );
};

export default MovieInfoUpdateButtons;
