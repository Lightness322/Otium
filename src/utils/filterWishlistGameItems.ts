import { gameGenres } from "../data/gameGenres";
import { IWishlistGame } from "../features/list/types/IWishlistGame";

interface IFlterWishlistGameItemsArgs {
  wishlistGames: IWishlistGame[];
  searchParams: URLSearchParams;
}

export function filterWishlistGameItems({
  wishlistGames,
  searchParams,
}: IFlterWishlistGameItemsArgs) {
  const wishlistGameGenreId = searchParams.get("genre");

  const wishlistGameGenreName = gameGenres
    .filter((genreObj) => genreObj.id === +wishlistGameGenreId!)
    .at(0)
    ?.genre.toLowerCase();

  let sortedAndFilteredArray = [...wishlistGames];

  if (wishlistGameGenreId === null) {
    sortedAndFilteredArray = [...sortedAndFilteredArray];
  } else {
    sortedAndFilteredArray = sortedAndFilteredArray.filter((wishlistGame) =>
      wishlistGame.genres.includes(wishlistGameGenreName!),
    );
  }

  return sortedAndFilteredArray;
}
