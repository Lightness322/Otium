import { useSearchParams } from "react-router-dom";

import { IGenre } from "../../types/IGenre";

interface IWishlistGenresSelectProps {
  genres: IGenre[];
  children: React.JSX.Element | React.JSX.Element[];
}

const WishlistGenresSelect: React.FC<IWishlistGenresSelectProps> = ({
  genres,
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultGenre = searchParams.get("genre");

  return (
    <label className="flex gap-x-4">
      <span className="font-semibold">Жанр</span>
      <select
        defaultValue={defaultGenre ? defaultGenre : ""}
        onChange={(e) => {
          const genreIdParams =
            e.target.value === "Все"
              ? "ALL"
              : genres
                  .filter((genreObj) => genreObj.genre === e.target.value)
                  .at(0)
                  ?.id.toString();
          genreIdParams === "ALL"
            ? searchParams.delete("genre")
            : searchParams.set("genre", genreIdParams!);
          setSearchParams(searchParams);
        }}
        className="rounded-md bg-hover-color pl-1"
      >
        {children}
      </select>
    </label>
  );
};

export default WishlistGenresSelect;
