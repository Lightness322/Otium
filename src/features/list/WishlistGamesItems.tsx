import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

import { filterWishlistGameItems } from "../../utils/filterWishlistGameItems";

import { LoaderType } from "../../enums/enums";

import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import WishlistGameItem from "./WishlistGameItem";
import WishlistEmpty from "./WishlistEmpty";

const WishlistGamesItems: React.FC = () => {
  const { wishlistGames, isLoading, deletingRowId, error } = useAppSelector(
    (state) => state.wishlistGamesReducer,
  );

  const [searchParams] = useSearchParams();

  if (isLoading && !deletingRowId) return <Loader type={LoaderType.big} />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  const filteredWishlistGames = filterWishlistGameItems({
    searchParams,
    wishlistGames,
  });

  return (
    <>
      {wishlistGames.length > 0 ? (
        <div className="grid grid-cols-4 justify-between max-[1070px]:grid-cols-3 max-[760px]:grid-cols-2 max-[500px]:flex max-[500px]:flex-col">
          {filteredWishlistGames.map((game) => (
            <WishlistGameItem key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <WishlistEmpty
          title="Список игр сейчас пустой"
          btnText="Добавить новые игры"
          navigateTo="/games"
          type="game"
        />
      )}
    </>
  );
};

export default WishlistGamesItems;
