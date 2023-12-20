import { useAppSelector } from "../../hooks/redux";

import { LoaderType } from "../../enums/enums";

import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import MovieItem from "./MovieItem";

const MovieItems: React.FC = () => {
  const { movies, error, isLoading } = useAppSelector(
    (state) => state.moviesReducer,
  );

  return (
    <div
      className={`grid auto-cols-max grid-cols-[repeat(auto-fill,_206px)] justify-between max-[1275px]:justify-evenly max-[863px]:grid-cols-[repeat(auto-fill,_180px)] max-[579px]:grid-cols-[repeat(auto-fill,_150px)] max-[489px]:grid-cols-[repeat(auto-fill,_180px)] max-[399px]:grid-cols-[repeat(auto-fill,_200px)]`}
    >
      <>
        {movies.length === 0 && isLoading && <Loader type={LoaderType.big} />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {movies?.map((movie) => (
          <MovieItem key={movie.kinopoiskId} movie={movie} />
        ))}
      </>
    </div>
  );
};

export default MovieItems;
