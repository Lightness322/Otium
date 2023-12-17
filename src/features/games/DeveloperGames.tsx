import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { fetchDeveloperGames } from "../../store/gamesReducers/ActionCreatorDeveloperGames";

import ItemsLoader from "../../ui/ItemsLoader";
import GameItems from "./GameItems";

const DeveloperGames: React.FC = () => {
  const {
    developerGames,
    developerName,
    error,
    isLoading,
    currentPage,
    totalPages,
  } = useAppSelector((state) => state.developerGamesReducer);

  const dispatch = useAppDispatch();

  const { developerId } = useParams();

  const { ref: inViewRef, inView } = useInView({ threshold: 1 });

  const pageRef = useRef(1);

  useEffect(() => {
    if (pageRef.current === 1 || inView) {
      dispatch(
        fetchDeveloperGames({ developerId, page: pageRef.current.toString() }),
      );
      pageRef.current += 1;
    }
  }, [developerId, dispatch, inView]);

  return (
    <div className="w-full">
      <div>
        <span className="text-2xl max-[820px]:text-xl">Игры от </span>
        <span className="text-3xl font-semibold max-[820px]:text-2xl">
          {developerName}
        </span>
      </div>
      <hr className="my-4 h-[1px] bg-font-primary-color" />
      <GameItems games={developerGames} error={error} isLoading={isLoading} />
      {developerGames.length > 0 && totalPages > currentPage && (
        <ItemsLoader propRef={inViewRef} />
      )}
    </div>
  );
};

export default DeveloperGames;
