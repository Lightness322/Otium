import { IGameScreenshot } from "./types/IGameScreenshots";
import { TypeSetStateFunction } from "../../types/TypeSetStateFunction";

import GameScreenshotItem from "./GameScreenshotItem";

interface IGameScreenshotItemsProps {
  gameScreenshots: IGameScreenshot[];
  setCurrentSlideLink: TypeSetStateFunction<string>;
}

const GameScreenshotItems: React.FC<IGameScreenshotItemsProps> = ({
  gameScreenshots,
  setCurrentSlideLink,
}) => {
  return (
    <div
      className={`grid auto-cols-max grid-cols-[repeat(auto-fill,_290px)] justify-between gap-6 max-[1271px]:grid-cols-[repeat(auto-fill,_270px)] max-[1191px]:justify-evenly max-[897px]:grid-cols-[repeat(auto-fill,_240px)] max-[807px]:grid-cols-[repeat(auto-fill,_270px)] max-[603px]:grid-cols-[repeat(auto-fill,_240px)] max-[543px]:pointer-events-none max-[543px]:flex max-[543px]:flex-col`}
    >
      {gameScreenshots.map((screenshot) => (
        <GameScreenshotItem
          screenshot={screenshot}
          setCurrentSlideLink={setCurrentSlideLink}
          key={screenshot.image}
        />
      ))}
    </div>
  );
};

export default GameScreenshotItems;
