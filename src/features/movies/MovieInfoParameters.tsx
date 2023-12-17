import { useMovieInfo } from "./useMovieInfo";

import { formatFilmLength } from "../../utils/moviesHelpers";

import { IMovieDetails } from "./types/IMovieDetails";
import { IStaffPerson } from "./types/IStaffPerson";

import Parameter from "../../ui/Parameter";
import RatingWithVotes from "../../ui/RatingWithVotes";

interface IMovieInfoParametersProps {
  movieDetails: IMovieDetails;
  directors: IStaffPerson[];
  writers: IStaffPerson[];
}

const MovieInfoParameters: React.FC<IMovieInfoParametersProps> = ({
  movieDetails,
  directors,
  writers,
}) => {
  const {
    countries,
    filmLength,
    genres,
    year,
    ratingImdb,
    ratingImdbVoteCount,
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
  } = movieDetails;

  const {
    genresParameterName,
    countriesParameterName,
    directorsParameterName,
    writersParameterName,
    directorsParameter,
    writersParameter,
  } = useMovieInfo(movieDetails, directors, writers);

  return (
    <>
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name={genresParameterName}
        parameter={genres}
      />
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name={countriesParameterName}
        parameter={countries}
      />
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name={directorsParameterName}
        parameter={directorsParameter}
      />
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name={writersParameterName}
        parameter={writersParameter}
      />
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name="Длительность"
        parameter={formatFilmLength(filmLength)}
      />
      <Parameter
        className="max-md:flex max-md:flex-col max-md:items-start max-[600px]:grid max-[600px]:grid-cols-[150px,_1fr]"
        name="Год"
        parameter={year}
      />
      <div className="mt-4 flex grow gap-x-7">
        <RatingWithVotes
          rating={ratingImdb}
          votes={ratingImdbVoteCount}
          service="IMDB"
          color="yellow"
        />
        <RatingWithVotes
          rating={ratingKinopoisk}
          votes={ratingKinopoiskVoteCount}
          service="Кинопоиск"
          color="orange"
        />
      </div>
    </>
  );
};

export default MovieInfoParameters;
