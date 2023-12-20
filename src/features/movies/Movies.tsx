import { useAppSelector } from "../../hooks/redux";
import { useInView } from "react-intersection-observer";

import MoviesSearchAndFilters from "./MoviesSearchAndFilters";
import MoviesItems from "./MovieItems";
import ItemsLoader from "../../ui/ItemsLoader";
import NoneResults from "../../ui/NoneResults";

const Movies: React.FC = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });

  const { movies, totalPages, currentPage, isLoading } = useAppSelector(
    (state) => state.moviesReducer,
  );

  return (
    <div className="flex flex-col gap-y-4">
      <MoviesSearchAndFilters inView={inView} />
      <NoneResults items={movies} isLoading={isLoading} type="movie" />
      <MoviesItems />
      {movies.length > 0 && totalPages > currentPage && (
        <ItemsLoader propRef={inViewRef} />
      )}
    </div>
  );
};

export default Movies;
