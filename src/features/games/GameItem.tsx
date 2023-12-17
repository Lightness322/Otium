import { useState } from "react";
import { useNavigate } from "react-router";

import { IGame } from "./types/IGame";

import { GameRating } from "../../ui/GameRating";
import GameItemUpdateButtons from "./GameItemUpdateButtons";
import GameItemYear from "./GameItemYear";

interface IGameItemProps {
  game: IGame;
  width: string;
  bgHoverColor?: string;
}

const GameItem: React.FC<IGameItemProps> = ({
  game,
  width,
  bgHoverColor = "",
}) => {
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  const {
    id: gameId,
    name: gameName,
    background_image,
    released,
    metacritic: rating,
  } = game;

  const year = released ? released.slice(0, 4) : "";

  const croppedPosterUrl = background_image?.replace(
    "media/",
    "media/crop/600/400/",
  );

  return (
    <div
      className={`z-10 w-[${width}] rounded-md p-3 hover:cursor-pointer ${
        bgHoverColor ? `hover:bg-[${bgHoverColor}]` : "hover:bg-hover-color"
      } `}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof Element && !e.target.closest("button")) {
          navigate(`/games/${gameId}`);
        }
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative">
        <GameItemUpdateButtons game={game} isHover={isHover} />
        <GameItemYear year={year} isHover={isHover} />
        <img
          className={`h-[calc(${width}/3*2)] w-full object-cover ${
            isHover ? "brightness-[35%] contrast-[70%] filter" : ""
          }`}
          src={`${croppedPosterUrl}`}
        />
        <GameRating rating={rating} />
      </div>
      <div
        className="mt-1 text-lg font-medium max-[820px]:text-base"
        key={gameId}
      >
        {gameName}
      </div>
    </div>
  );
};

export default GameItem;
