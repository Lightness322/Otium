import { useNavigate } from "react-router";

import { IWishlistGame } from "./types/IWishlistGame";

import WishlistGameButtons from "./WishlistGameButtons";

interface IWishlistGameItemProps {
  game: IWishlistGame;
}

const WishlistGameItem: React.FC<IWishlistGameItemProps> = ({ game }) => {
  const navigate = useNavigate();

  const { gameId, name, posterUrl, genres } = game;

  const croppedPosterUrl = posterUrl.replace("media/", "media/crop/600/400/");

  const genresString = genres.slice(0, 2).join(", ");

  return (
    <div
      className="flex flex-col gap-x-4 rounded-md p-3 hover:cursor-pointer hover:bg-hover-color max-[500px]:mx-auto max-[500px]:max-w-[350px]"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof Element && !e.target.closest("button")) {
          navigate(`/games/${gameId}`);
        }
      }}
    >
      <img className="r mb-1 cursor-pointer" src={`${croppedPosterUrl}`} />
      <div className="grow text-xl font-medium max-[830px]:text-base">
        {name}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-font-secondary-color max-[830px]:text-sm">
          {genresString}
        </div>
        <WishlistGameButtons game={game} />
      </div>
    </div>
  );
};

export default WishlistGameItem;
