import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

import { filterWishlistMovieItems } from "../../utils/filterWishlistMovieItems";

import { LoaderType } from "../../enums/enums";

import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import WishlistMovieItem from "./WishlistMovieItem";
import WishlistEmpty from "./WishlistEmpty";

const WishlistMoviesItems: React.FC = () => {
  const { wishlistMovies, isLoading, deletingRowId, error } = useAppSelector(
    (state) => state.wishlistMoviesReducer,
  );

  const [searchParams] = useSearchParams();

  if (isLoading && !deletingRowId) return <Loader type={LoaderType.big} />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  const filteredWishlistMovies = filterWishlistMovieItems({
    searchParams,
    wishlistMovies,
  });

  return (
    <>
      {wishlistMovies.length > 0 ? (
        <div className="grid grid-cols-3 justify-between max-[1210px]:grid-cols-2 max-[710px]:flex max-[710px]:flex-col">
          {filteredWishlistMovies.map((movie) => (
            <WishlistMovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <WishlistEmpty
          title="Список фильмов сейчас пустой"
          btnText="Добавить новые фильмы"
          navigateTo="/movies"
          type="movie"
        />
      )}
    </>
  );
};

export default WishlistMoviesItems;
