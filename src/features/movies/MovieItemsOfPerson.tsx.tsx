import { sortPersonMoviesByRating } from "../../utils/moviesHelpers";

import { IMovieOfPerson } from "./types/IStaffPersonDetails";

import MovieItemOfPerson from "./MovieItemOfPerson";

interface IMovieItemsOfPersonProps {
  movies: IMovieOfPerson[];
  title: string;
}

const MovieItemsOfPerson: React.FC<IMovieItemsOfPersonProps> = ({
  movies,
  title,
}) => {
  if (movies.length === 0) return null;

  const sortedMovies = sortPersonMoviesByRating(movies);

  return (
    <div>
      <div className="mb-4 text-2xl">{title}</div>
      <ul className="grid grid-cols-[repeat(3,_calc(370/1160*100%))] justify-between gap-y-4 max-[800px]:grid-cols-[repeat(2,_48%)] max-[470px]:flex max-[470px]:flex-col">
        {sortedMovies.map((movie) => (
          <MovieItemOfPerson key={movie.filmId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieItemsOfPerson;
