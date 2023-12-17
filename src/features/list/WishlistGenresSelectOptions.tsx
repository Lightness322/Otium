import { IGenre } from "../../types/IGenre";
import { IWishlistMovie } from "./types/IWishlistMovie";
import { IWishlistGame } from "./types/IWishlistGame";

interface IWishlistGenresSelectOptionsProps {
  genres: IGenre[];
  wishlistItems: IWishlistGame[] | IWishlistMovie[];
}

const WishlistGenresSelectOptions: React.FC<
  IWishlistGenresSelectOptionsProps
> = ({ genres, wishlistItems }) => {
  const allGenres = Array.from(
    new Set(wishlistItems.map((wishlistItem) => wishlistItem.genres).flat()),
  );
  return (
    <>
      <option>Все</option>
      {genres.map((genreObj) => {
        if (allGenres.includes(genreObj.genre.toLowerCase())) {
          return <option key={genreObj.id}>{genreObj.genre}</option>;
        }
      })}
    </>
  );
};

export default WishlistGenresSelectOptions;
