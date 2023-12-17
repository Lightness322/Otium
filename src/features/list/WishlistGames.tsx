import { useAppSelector } from "../../hooks/redux";

import { gameGenres } from "../../data/gameGenres";

import WishlistGenresSelectOptions from "./WishlistGenresSelectOptions";
import WishlistGenresSelect from "./WishlistGenresSelect";
import WishlistGamesItems from "./WishlistGamesItems";

const WishlistGames: React.FC = () => {
  const { wishlistGames } = useAppSelector(
    (state) => state.wishlistGamesReducer,
  );

  return (
    <div className="flex flex-col gap-y-4">
      {wishlistGames.length > 0 && (
        <WishlistGenresSelect genres={gameGenres}>
          <WishlistGenresSelectOptions
            genres={gameGenres}
            wishlistItems={wishlistGames}
          />
        </WishlistGenresSelect>
      )}
      <WishlistGamesItems />
    </div>
  );
};

export default WishlistGames;
