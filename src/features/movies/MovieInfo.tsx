import { IStaffPerson } from "./types/IStaffPerson";
import { IMovieDetails } from "./types/IMovieDetails";

import MovieName from "./MovieName";
import MovieInfoParameters from "./MovieInfoParameters";
import MovieInfoUpdateButtons from "./MovieInfoUpdateButtons";

interface IMovieInfoProps {
  movieDetails: IMovieDetails;
  directors: IStaffPerson[];
  writers: IStaffPerson[];
}

const MovieInfo: React.FC<IMovieInfoProps> = ({
  movieDetails,
  directors,
  writers,
}) => {
  const { nameOriginal, nameRu, slogan } = movieDetails;

  return (
    <div className="flex flex-col">
      <MovieName nameOriginal={nameOriginal} nameRu={nameRu} />
      {slogan && <div>{slogan}</div>}
      <hr className="my-4 h-[1px] bg-font-primary-color" />
      <div className="flex grow flex-col gap-y-1">
        <MovieInfoParameters
          movieDetails={movieDetails}
          directors={directors}
          writers={writers}
        />
        <MovieInfoUpdateButtons movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default MovieInfo;
