import { useState } from "react";

import { IGameScreenshot } from "./types/IGameScreenshots";

import GameDetailsShowItems from "./GameDetailsShowItems";
import CSSTransitionWrapper from "../../ui/CSSTransitionWrapper";
import GameScreenshotItems from "./GameScreenshotItems";
import GameScreenshotsSlider from "./GameScreenshotsSlider";

interface IGameScreenshotsProps {
  gameScreenshots: IGameScreenshot[];
}

const GameScreenshots: React.FC<IGameScreenshotsProps> = ({
  gameScreenshots,
}) => {
  const [isScreenshotsShow, setIsScreenshotsShow] = useState<boolean>(false);

  const [currentSlideLink, setCurrentSlideLink] = useState<string>("");

  function handleShowScreenshots() {
    setIsScreenshotsShow((isShow) => !isShow);
  }

  return (
    <>
      {gameScreenshots.length > 0 && (
        <div className="flex flex-col gap-y-2 text-white">
          <GameDetailsShowItems
            title="Скриншоты"
            isShow={isScreenshotsShow}
            handleShow={handleShowScreenshots}
          />
          <CSSTransitionWrapper isShow={isScreenshotsShow}>
            <GameScreenshotItems
              gameScreenshots={gameScreenshots}
              setCurrentSlideLink={setCurrentSlideLink}
            />
          </CSSTransitionWrapper>
          <GameScreenshotsSlider
            gameScreenshots={gameScreenshots}
            currentSlideLink={currentSlideLink}
            setCurrentSlideLink={setCurrentSlideLink}
          />
        </div>
      )}
    </>
  );
};

export default GameScreenshots;
