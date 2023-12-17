import { IGame } from "./types/IGame";

import GameItem from "./GameItem";

interface IGamesPartOfSeriesItemsProps {
  gamesPartOfSeries: IGame[];
}

const GamesPartOfSeriesItems: React.FC<IGamesPartOfSeriesItemsProps> = ({
  gamesPartOfSeries,
}) => {
  return (
    <div
      className={`grid auto-cols-max grid-cols-[repeat(auto-fill,_248px)] justify-between max-xl:justify-evenly max-[783px]:grid-cols-[repeat(auto-fill,_218px)] max-[693px]:grid-cols-[repeat(auto-fill,_248px)] max-[535px]:grid-cols-[repeat(auto-fill,_218px)] max-[475px]:grid-cols-[repeat(auto-fill,_248px)]`}
    >
      {gamesPartOfSeries.map((game) => (
        <GameItem
          game={game}
          bgHoverColor="#3c3c3c"
          width="248px"
          key={game.id}
        />
      ))}
    </div>
  );
};

export default GamesPartOfSeriesItems;
