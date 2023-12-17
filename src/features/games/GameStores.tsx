import { IGameStore } from "./types/IGameStore";

import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteam } from "react-icons/fa";

import GameStoreLink from "../../ui/GameStoreLink";

interface IGameStoresProps {
  gameStores: IGameStore[];
}

const GameStores: React.FC<IGameStoresProps> = ({ gameStores }) => {
  return (
    <div className="flex justify-end gap-x-5 max-[603px]:gap-x-3">
      <GameStoreLink gameStores={gameStores} storeId={1}>
        <FaSteam
          className="text-[#b6b6b6] hover:text-white max-[603px]:max-h-[35px]"
          size="40"
        />
      </GameStoreLink>
      <GameStoreLink gameStores={gameStores} storeId={3}>
        <FaPlaystation
          className="text-[#b6b6b6] hover:text-white max-[603px]:max-h-[35px]"
          size="40"
        />
      </GameStoreLink>
      <GameStoreLink gameStores={gameStores} storeId={5}>
        <SiGogdotcom
          className="text-[#b6b6b6] hover:text-white max-[603px]:max-h-[35px]"
          size="40"
        />
      </GameStoreLink>
      <GameStoreLink gameStores={gameStores} storeId={6}>
        <SiNintendoswitch
          className="text-[#b6b6b6] hover:text-white max-[603px]:max-h-[35px]"
          size="40"
        />
      </GameStoreLink>
      <GameStoreLink gameStores={gameStores} storeId={11}>
        <SiEpicgames
          size="40"
          className="text-[#b6b6b6] hover:text-white max-[603px]:max-h-[35px]"
        />
      </GameStoreLink>
    </div>
  );
};

export default GameStores;
