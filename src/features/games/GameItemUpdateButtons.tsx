import { useUpdateWishlistGames } from "./useUpdateWishlistGames";
import { useUpdatePlayedGames } from "./useUpdatePlayedGames";

import { IGame } from "./types/IGame";

import UpdateViewedOrPlayedButton from "../../ui/UpdateViewedOrPlayedButton";
import UpdateWishlistButton from "../../ui/UpdateWishlistButton";

interface IGameItemUpdateButtonsProps {
  game: IGame;
  isHover: boolean;
}

const GameItemUpdateButtons: React.FC<IGameItemUpdateButtonsProps> = ({
  game,
  isHover,
}) => {
  const { id: gameId } = game;

  const { isPlayed, isPlayedLoading, handlePlayedGamesUpdate } =
    useUpdatePlayedGames(gameId);

  const { isInWishlist, isWishlistLoading, handleWishlistGamesUpdate } =
    useUpdateWishlistGames(game);

  return (
    <>
      <UpdateViewedOrPlayedButton
        className="absolute left-0 top-0 z-10 h-10 w-10 bg-transparent p-1 opacity-50 hover:opacity-100"
        updateFunction={handlePlayedGamesUpdate}
        isPlayedOrViewed={isPlayed}
        isLoading={isPlayedLoading}
        isMovieItemHover={isHover}
        type="game"
      />
      {!isPlayed && (
        <UpdateWishlistButton
          className="absolute right-0 top-0 z-10 h-10 w-10 bg-transparent p-1 opacity-50 hover:opacity-100"
          updateFunction={handleWishlistGamesUpdate}
          isLoading={isWishlistLoading}
          isInWishlist={isInWishlist}
          isMovieItemHover={isHover}
        />
      )}
    </>
  );
};

export default GameItemUpdateButtons;
