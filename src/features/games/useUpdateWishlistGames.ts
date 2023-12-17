import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import {
  deleteWishlistGame,
  insertWishlistGame,
} from "../../store/wishlistReducers/ActionCreatorsWishlistGames";

import { IGame } from "./types/IGame";

export function useUpdateWishlistGames(game: IGame) {
  const { wishlistGames, isLoading: isWishlistLoading } = useAppSelector(
    (state) => state.wishlistGamesReducer,
  );

  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  const { id: gameId, name, background_image: posterUrl, genres } = game;

  const wishlistGameGenres = genres?.map((genre) => genre.name.toLowerCase());

  const isInWishlist = !!wishlistGames
    .map((wishlistGame) => wishlistGame.gameId)
    .find((wishlistId) => wishlistId === gameId);

  const wishlistGameRowId = isInWishlist
    ? wishlistGames
        .filter((wishlistGame) => wishlistGame.gameId === gameId)
        .at(0)!.id
    : null;

  function handleWishlistGamesUpdate() {
    if (isInWishlist) {
      dispatch(deleteWishlistGame(wishlistGameRowId!));
    } else {
      dispatch(
        insertWishlistGame({
          gameId,
          userId: userId!,
          name,
          posterUrl,
          genres: wishlistGameGenres,
        }),
      );
    }
  }

  return {
    isInWishlist,
    isWishlistLoading,
    handleWishlistGamesUpdate,
  };
}
