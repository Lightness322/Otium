import { IGameStore } from "./types/IGameStore";
import { IGameDetails } from "./types/IGameDetails";

import GameStores from "./GameStores";
import GameInfoParameters from "./GameInfoParameters";
import GameInfoUpdateButtons from "./GameInfoUpdateButtons";

interface IGameInfoProps {
  gameDetails: IGameDetails;
  gameStores: IGameStore[];
}

const GameInfo: React.FC<IGameInfoProps> = ({ gameDetails, gameStores }) => {
  const { name } = gameDetails;

  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-between gap-x-2 max-[520px]:flex-col-reverse max-[520px]:gap-y-2">
        <div className="text-4xl font-semibold max-md:text-3xl max-[603px]:text-2xl">
          {name}
        </div>
        <GameStores gameStores={gameStores} />
      </div>
      <hr className="my-4 h-[1px] bg-white" />
      <div className="flex grow flex-col gap-y-1">
        <GameInfoParameters gameDetails={gameDetails} />
        <GameInfoUpdateButtons gameDetails={gameDetails} />
      </div>
    </div>
  );
};

export default GameInfo;
