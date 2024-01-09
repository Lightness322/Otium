import { useNavigate } from "react-router";

import { IWishlistMovie } from "./types/IWishlistMovie";

import WishlistMovieButtons from "./WishlistMovieButtons";

interface IWishlistMovieItemProps {
  movie: IWishlistMovie;
}

const WishlistMovieItem: React.FC<IWishlistMovieItemProps> = ({ movie }) => {
  const navigate = useNavigate();

  const { nameRu, nameOriginal, posterUrl, kinopoiskId, genres } = movie;

  const genresString = genres.slice(0, 2).join(", ");

  return (
    <div
      className="max-w-500px grid h-[200px] grid-cols-[126px,_1fr] gap-x-4 rounded-md p-3 hover:cursor-pointer hover:bg-hover-color max-[1210px]:h-[260px] max-[1210px]:grid-cols-[162px,_1fr] max-[970px]:h-[200px] max-[970px]:grid-cols-[126px,_1fr] max-[710px]:grid max-[710px]:grid-cols-[122px,_1fr]"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof Element && !e.target.closest("button")) {
          navigate(`/movies/${kinopoiskId}`);
        }
      }}
    >
      <img
        className="h-[176px] w-[126px] cursor-pointer object-cover max-[1210px]:h-[236px] max-[1210px]:w-[162px] max-[970px]:h-[176px] max-[970px]:w-[126px] max-[710px]:w-[122px]"
        src={`${posterUrl}`}
      />
      <div className="flex w-full flex-col">
        <div className="text-xl font-medium max-[830px]:text-base max-[710px]:text-xl max-[470px]:text-base">
          {nameRu}
        </div>
        <div className="mb-2 text-font-secondary-color max-[830px]:text-sm max-[710px]:text-base max-[470px]:text-sm">
          {nameOriginal}
        </div>
        <div className="grow max-[830px]:text-sm max-[710px]:text-base max-[470px]:text-sm">
          {genresString}
        </div>
        <div className="flex items-center justify-between">
          <WishlistMovieButtons movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default WishlistMovieItem;
