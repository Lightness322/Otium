import { movieGenres } from "../data/movieGenres";
import { IWishlistMovie } from "../features/list/types/IWishlistMovie";

interface IFlterWishlistMovieItemsArgs {
  wishlistMovies: IWishlistMovie[];
  searchParams: URLSearchParams;
}

export function filterWishlistMovieItems({
  wishlistMovies,
  searchParams,
}: IFlterWishlistMovieItemsArgs) {
  const wishlistMovieGenreId = searchParams.get("genre");
  const wishlistMovieType = searchParams.get("type");

  const wishlistMovieGenreName = movieGenres
    .filter((genreObj) => genreObj.id === +wishlistMovieGenreId!)
    .at(0)?.genre;

  let sortedAndFilteredArray = [...wishlistMovies];

  if (wishlistMovieType === null) {
    sortedAndFilteredArray = [...wishlistMovies];
  } else {
    sortedAndFilteredArray = sortedAndFilteredArray.filter(
      (wishlistMovie) => wishlistMovie.type === wishlistMovieType,
    );
  }

  if (wishlistMovieGenreId === null) {
    sortedAndFilteredArray = [...sortedAndFilteredArray];
  } else {
    sortedAndFilteredArray = sortedAndFilteredArray.filter((wishlistMovie) =>
      wishlistMovie.genres.includes(wishlistMovieGenreName!.toLowerCase()),
    );
  }

  return sortedAndFilteredArray;
}
