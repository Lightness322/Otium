import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { deleteWishlistMovie } from "../../store/wishlistReducers/ActionCreatorsWishlistMovies";
import { insertViewedMovie } from "../../store/moviesReducers/ActionCreatotsViewedMovies";

import { LoaderType } from "../../enums/enums";
import { IWishlistMovie } from "./types/IWishlistMovie";

import { CgPlayListRemove } from "react-icons/cg";
import { FaRegCheckSquare } from "react-icons/fa";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";

interface IWishlistMovieButtonsProps {
  movie: IWishlistMovie;
}

const WishlistMovieButtons: React.FC<IWishlistMovieButtonsProps> = ({
  movie,
}) => {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const { deletingRowId: deletingMovieRowId } = useAppSelector(
    (state) => state.wishlistMoviesReducer,
  );

  const { viewedMoviesIds, isLoading: isViewedMoviesUpdating } = useAppSelector(
    (state) => state.viewedMoviesReducer,
  );

  const dispatch = useAppDispatch();

  const { kinopoiskId: movieId, id: wishlistMovieRowId } = movie;

  return (
    <div className="flex gap-x-1">
      <Button
        className="h-[48px] w-[48px] rounded-md bg-transparent p-1 text-font-secondary-color hover:text-red-500"
        disabled={
          deletingMovieRowId === wishlistMovieRowId || isViewedMoviesUpdating
        }
        onClick={() => {
          dispatch(deleteWishlistMovie(wishlistMovieRowId!));
        }}
      >
        {deletingMovieRowId === wishlistMovieRowId &&
        !isViewedMoviesUpdating ? (
          <Loader type={LoaderType.small} />
        ) : (
          <CgPlayListRemove className="translate-y-[2px]" size="35" />
        )}
      </Button>
      <Button
        className="h-[48px] w-[48px] rounded-md bg-transparent p-1 text-font-secondary-color hover:text-green-600"
        disabled={
          deletingMovieRowId === wishlistMovieRowId || isViewedMoviesUpdating
        }
        onClick={() => {
          dispatch(
            insertViewedMovie({
              viewedMoviesIds,
              userId: userId!,
              movieId,
            }),
          );
          dispatch(deleteWishlistMovie(wishlistMovieRowId!));
        }}
      >
        {deletingMovieRowId === wishlistMovieRowId && isViewedMoviesUpdating ? (
          <Loader type={LoaderType.small} />
        ) : (
          <FaRegCheckSquare className="text-inherit" size="30" />
        )}
      </Button>
    </div>
  );
};

export default WishlistMovieButtons;
