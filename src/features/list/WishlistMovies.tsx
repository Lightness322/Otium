import { useAppSelector } from "../../hooks/redux";

import { movieGenres } from "../../data/movieGenres";

import WishlistGenresSelect from "./WishlistGenresSelect";
import WishlistGenresSelectOptions from "./WishlistGenresSelectOptions";
import WishlistMovieTypesSelect from "./WishlistMovieTypesSelect";
import WishlistMoviesItems from "./WishlistMoviesItems";

export const WishlistMovies: React.FC = () => {
  const { wishlistMovies } = useAppSelector(
    (state) => state.wishlistMoviesReducer,
  );

  return (
    <div className="flex flex-col gap-y-4">
      {wishlistMovies.length > 0 && (
        <div className="flex gap-x-10 max-[450px]:flex-col max-[450px]:gap-y-4">
          <WishlistGenresSelect genres={movieGenres}>
            <WishlistGenresSelectOptions
              genres={movieGenres}
              wishlistItems={wishlistMovies}
            />
          </WishlistGenresSelect>
          <WishlistMovieTypesSelect />
        </div>
      )}
      <WishlistMoviesItems />
    </div>
  );
};
