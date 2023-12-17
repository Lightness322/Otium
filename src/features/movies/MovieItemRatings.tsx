import { addPointZero } from "../../utils/moviesHelpers";

interface IMovieItemRatingsProps {
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
}

const MovieItemRatings: React.FC<IMovieItemRatingsProps> = ({
  ratingImdb,
  ratingKinopoisk,
}) => {
  return (
    <>
      {ratingImdb && (
        <div className="absolute bottom-0 left-0 border-[1px] border-solid bg-yellow p-1 font-numbers font-bold text-black max-[579px]:p-[2px]">
          {addPointZero(ratingImdb)}
        </div>
      )}
      {ratingKinopoisk && (
        <div className="absolute bottom-0 right-0 border-[1px] border-solid border-black bg-orange p-1 font-numbers font-bold text-white max-[579px]:p-[2px]">
          {addPointZero(ratingKinopoisk)}
        </div>
      )}
    </>
  );
};

export default MovieItemRatings;
