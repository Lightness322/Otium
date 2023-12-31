import { useGameDetails } from "./useGameDetails";

import { LoaderType } from "../../enums/enums";

import GamesPartOfSeriesItems from "./GamesPartOfSeries";
import GameScreenshots from "./GameScreenshots";
import GameInfo from "./GameInfo";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

const GameDetails: React.FC = () => {
  const {
    gameDetails,
    gameStores,
    gamesPartOfSeries,
    gameScreenshots,
    isLoading,
    errorMessage,
  } = useGameDetails();

  const { background_image } = gameDetails;

  if (isLoading) return <Loader type={LoaderType.big} />;

  if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background_image})` }}
        className="fixed left-0 top-[70px] -z-50 h-screen w-screen bg-cover bg-top bg-no-repeat brightness-[20%] contrast-[80%] filter"
      />
      <div className="flex flex-col gap-y-5 max-[603px]:gap-y-2">
        <GameInfo gameDetails={gameDetails} gameStores={gameStores} />
        <GamesPartOfSeriesItems gamesPartOfSeries={gamesPartOfSeries} />
        <GameScreenshots gameScreenshots={gameScreenshots} />
      </div>
    </div>
  );
};

export default GameDetails;
