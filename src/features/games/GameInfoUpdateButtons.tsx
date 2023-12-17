import { useUpdateWishlistGames } from "./useUpdateWishlistGames";
import { useUpdatePlayedGames } from "./useUpdatePlayedGames";

import { IGameDetails } from "./types/IGameDetails";

import UpdateViewedOrPlayedButton from "../../ui/UpdateViewedOrPlayedButton";
import UpdateWishlistButton from "../../ui/UpdateWishlistButton";

interface IGameInfoUpdateButtonsProps {
  gameDetails: IGameDetails;
}

const GameInfoUpdateButtons: React.FC<IGameInfoUpdateButtonsProps> = ({
  gameDetails,
}) => {
  const { id: gameId } = gameDetails;

  const { handlePlayedGamesUpdate, isPlayed, isPlayedLoading } =
    useUpdatePlayedGames(gameId);

  const { handleWishlistGamesUpdate, isInWishlist, isWishlistLoading } =
    useUpdateWishlistGames(gameDetails);

  return (
    <div className="flex gap-x-5">
      <UpdateViewedOrPlayedButton
        className="h-12 w-12 rounded-md bg-transparent p-1 hover:bg-hover-color"
        updateFunction={handlePlayedGamesUpdate}
        isPlayedOrViewed={isPlayed}
        isLoading={isPlayedLoading}
        type="game"
        size="35"
      />
      {!isPlayed && (
        <UpdateWishlistButton
          className="h-12 w-12 translate-y-[2px] rounded-md bg-transparent p-1 hover:bg-hover-color"
          updateFunction={handleWishlistGamesUpdate}
          isLoading={isWishlistLoading}
          isInWishlist={isInWishlist}
          size="40"
        />
      )}
    </div>
  );
};

export default GameInfoUpdateButtons;
