import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

import { movieTypes } from "../../data/movieTypes";

const WishlistMovieTypesSelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { wishlistMovies } = useAppSelector(
    (state) => state.wishlistMoviesReducer,
  );

  const defaultType = searchParams.get("type");

  const allWishlistMovieTypes = Array.from(
    new Set(wishlistMovies.map((wishlistMovie) => wishlistMovie.type)),
  );

  return (
    <label className="flex gap-x-4 max-[450px]:gap-x-[30px]">
      <span className="font-semibold">Тип</span>
      <select
        defaultValue={defaultType ? defaultType : "Все типы"}
        onChange={(e) => {
          const typeParams = movieTypes
            .filter((movieType) => movieType.name === e.target.value)
            .at(0)?.value;
          typeParams === "ALL"
            ? searchParams.delete("type")
            : searchParams.set("type", typeParams!);
          setSearchParams(searchParams);
        }}
        className="rounded-md bg-hover-color pl-1"
      >
        {movieTypes.map((movieType) => {
          if (
            allWishlistMovieTypes.includes(movieType.value) ||
            movieType.value === "ALL"
          ) {
            return <option key={movieType.value}>{movieType.name}</option>;
          }
        })}
      </select>
    </label>
  );
};

export default WishlistMovieTypesSelect;
