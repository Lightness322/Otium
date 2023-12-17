import { useState } from "react";

import { IGame } from "./types/IGame";

import GameDetailsShowItems from "./GameDetailsShowItems";
import CSSTransitionWrapper from "../../ui/CSSTransitionWrapper";
import GamesPartOfSeriesItems from "./GamesPartOfSeriesItems";

interface IGamesPartOfSeriesProps {
  gamesPartOfSeries: IGame[];
}

const GamesPartOfSeries: React.FC<IGamesPartOfSeriesProps> = ({
  gamesPartOfSeries,
}) => {
  const [isGamesShow, setIsGamesShow] = useState<boolean>(false);

  function handleShowGames() {
    setIsGamesShow((isShow) => !isShow);
  }

  return (
    <>
      {gamesPartOfSeries.length > 0 && (
        <div className="text-white">
          <GameDetailsShowItems
            title="Другие игры этой серии"
            isShow={isGamesShow}
            handleShow={handleShowGames}
          />
          <CSSTransitionWrapper isShow={isGamesShow}>
            <GamesPartOfSeriesItems gamesPartOfSeries={gamesPartOfSeries} />
          </CSSTransitionWrapper>
        </div>
      )}
    </>
  );
};

export default GamesPartOfSeries;
