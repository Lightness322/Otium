import { useAppSelector } from "../../hooks/redux";
import { useInView } from "react-intersection-observer";

import GamesSearchAndFilters from "./GamesSearchAndFilters";
import GamesItems from "./GameItems";
import ItemsLoader from "../../ui/ItemsLoader";
import NoneResults from "../../ui/NoneResults";

const Games: React.FC = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });

  const { games, totalPages, currentPage, error, isLoading } = useAppSelector(
    (state) => state.gamesReducer,
  );

  return (
    <div className="flex flex-col gap-y-4">
      <GamesSearchAndFilters inView={inView} />
      <NoneResults items={games} isLoading={isLoading} />
      <GamesItems games={games} error={error} isLoading={isLoading} />
      {games.length > 0 && totalPages > currentPage && (
        <ItemsLoader propRef={inViewRef} />
      )}
    </div>
  );
};

export default Games;
