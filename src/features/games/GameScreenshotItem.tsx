import { TypeSetStateFunction } from "../../types/TypeSetStateFunction";
import { IGameScreenshot } from "./types/IGameScreenshots";

interface IGameScreenshotItemProps {
  screenshot: IGameScreenshot;
  setCurrentSlideLink: TypeSetStateFunction<string>;
}

const GameScreenshotItem: React.FC<IGameScreenshotItemProps> = ({
  screenshot,
  setCurrentSlideLink,
}) => {
  return (
    <img
      className="cursor-pointer rounded-2xl transition-transform hover:scale-110 hover:outline hover:outline-hover-color"
      onClick={() => setCurrentSlideLink(screenshot.image)}
      src={`${screenshot.image.replace("media/", "media/crop/600/400/")}`}
    />
  );
};

export default GameScreenshotItem;
