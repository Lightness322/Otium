import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { deleteWishlistGame } from "../../store/wishlistReducers/ActionCreatorsWishlistGames";
import { insertPlayedGames } from "../../store/gamesReducers/ActionCreatorsPlayedGames";

import { LoaderType } from "../../enums/enums";
import { IWishlistGame } from "./types/IWishlistGame";

import { CgPlayListRemove } from "react-icons/cg";
import { FaRegCheckSquare } from "react-icons/fa";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";

interface IWishlistGameButtonsProps {
  game: IWishlistGame;
}

const WishlistGameButtons: React.FC<IWishlistGameButtonsProps> = ({ game }) => {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const { deletingRowId: deletingGameRowId } = useAppSelector(
    (state) => state.wishlistGamesReducer,
  );

  const { playedGamesIds, isLoading: isPlayedGamesUpdating } = useAppSelector(
    (state) => state.playedGamesReducer,
  );

  const dispatch = useAppDispatch();

  const { gameId, id: wishlistIGameRowId } = game;

  return (
    <div className="flex gap-x-1">
      <Button
        className="h-[48px] w-[48px] rounded-md bg-transparent p-1 text-font-secondary-color hover:text-red-500"
        disabled={
          deletingGameRowId === wishlistIGameRowId && isPlayedGamesUpdating
        }
        onClick={() => {
          dispatch(deleteWishlistGame(wishlistIGameRowId!));
        }}
      >
        {deletingGameRowId === wishlistIGameRowId && !isPlayedGamesUpdating ? (
          <Loader type={LoaderType.small} />
        ) : (
          <CgPlayListRemove className="translate-y-[2px]" size="35" />
        )}
      </Button>
      <Button
        className="h-[48px] w-[48px] rounded-md bg-transparent p-1 text-font-secondary-color hover:text-green-600"
        disabled={
          deletingGameRowId === wishlistIGameRowId && isPlayedGamesUpdating
        }
        onClick={() => {
          dispatch(
            insertPlayedGames({
              playedGamesIds,
              userId: userId!,
              gameId,
            }),
          );
          dispatch(deleteWishlistGame(wishlistIGameRowId!));
        }}
      >
        {deletingGameRowId === wishlistIGameRowId && isPlayedGamesUpdating ? (
          <Loader type={LoaderType.small} />
        ) : (
          <FaRegCheckSquare className="text-inherit" size="30" />
        )}
      </Button>
    </div>
  );
};

export default WishlistGameButtons;
