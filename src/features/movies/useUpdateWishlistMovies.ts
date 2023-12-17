import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import {
  deleteWishlistMovie,
  insertWishlistMovie,
} from "../../store/wishlistReducers/ActionCreatorsWishlistMovies";

import { IMovie } from "./types/IMovie";

export function useUpdateWishlistMovies(movie: IMovie) {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const { wishlistMovies, isLoading: isWishlistLoading } = useAppSelector(
    (state) => state.wishlistMoviesReducer,
  );

  const dispatch = useAppDispatch();

  const {
    kinopoiskId: movieId,
    nameOriginal,
    posterUrlPreview: posterUrl,
    nameRu,
    type,
    genres,
  } = movie;

  const genreNames = genres?.map((genreObj) => genreObj.genre);

  const isInWishlist = !!wishlistMovies
    .map((movie) => movie.kinopoiskId)
    .find((wishlistId) => wishlistId === movieId);

  const wishlistMovieRowId = isInWishlist
    ? wishlistMovies.filter((movie) => movie.kinopoiskId === movieId).at(0)!.id
    : null;

  function handleWishlistMoviesUpdate() {
    if (isInWishlist) {
      dispatch(deleteWishlistMovie(wishlistMovieRowId!));
    } else {
      dispatch(
        insertWishlistMovie({
          kinopoiskId: movieId,
          userId: userId!,
          nameOriginal,
          nameRu,
          posterUrl,
          type,
          genres: genreNames,
        }),
      );
    }
  }

  return {
    isInWishlist,
    isWishlistLoading,
    handleWishlistMoviesUpdate,
  };
}
