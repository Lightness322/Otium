import { useMovieDetails } from "./useMovieDetails";

import { LoaderType } from "../../enums/enums";

import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";
import PersonItems from "./PersonItems";

const MovieDetails: React.FC = () => {
  const { movieDetails, directors, actors, writers, isLoading, errorMessage } =
    useMovieDetails();

  const { posterUrlPreview, description } = movieDetails;

  if (isLoading) return <Loader type={LoaderType.big} />;
  if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>;

  return (
    <div className="relative flex flex-col gap-y-3">
      <div className="grid grid-cols-[300px,_1fr] gap-x-10 max-md:grid-cols-[1fr,_1fr] max-[600px]:flex max-[600px]:flex-col max-[600px]:gap-y-4">
        <img
          className="max-md:order-2 max-[600px]:mx-auto max-[600px]:w-full max-[600px]:max-w-[360px]"
          src={`${posterUrlPreview}`}
        />
        <MovieInfo
          movieDetails={movieDetails}
          directors={directors}
          writers={writers}
        />
      </div>
      <MovieDescription description={description} />
      <PersonItems persons={directors} title="Режиссеры" />
      <PersonItems persons={actors} title="Актеры" />
    </div>
  );
};

export default MovieDetails;
