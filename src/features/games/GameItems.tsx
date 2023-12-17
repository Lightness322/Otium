import { IGame } from "./types/IGame";
import { LoaderType } from "../../enums/enums";

import Loader from "../../ui/Loader";
import GameItem from "./GameItem";
import ErrorMessage from "../../ui/ErrorMessage";

interface IGameItemsProps {
  games: IGame[];
  error: string;
  isLoading: boolean;
}

const GameItems: React.FC<IGameItemsProps> = ({ games, error, isLoading }) => {
  return (
    <div className="grid auto-cols-max grid-cols-[repeat(auto-fill,_310px)] justify-between max-xl:justify-evenly max-[970px]:grid-cols-[repeat(auto-fill,_260px)] max-[820px]:grid-cols-[repeat(auto-fill,_210px)] max-[669px]:grid-cols-[repeat(auto-fill,_260px)] max-[559px]:grid-cols-[repeat(auto-fill,_210px)] max-[459px]:grid-cols-[repeat(auto-fill,_260px)]">
      <>
        {games.length === 0 && isLoading && <Loader type={LoaderType.big} />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {games?.map((game) => (
          <GameItem key={game.id} game={game} width="310px" />
        ))}
      </>
    </div>
  );
};

export default GameItems;
