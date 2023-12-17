import { IGameScreenshot } from "./types/IGameScreenshots";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CSSTransitionWrapper from "../../ui/CSSTransitionWrapper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TypeSetStateFunction } from "../../types/TypeSetStateFunction";

interface IGameScreenshotsSliderProps {
  gameScreenshots: IGameScreenshot[];
  currentSlideLink: string;
  setCurrentSlideLink: TypeSetStateFunction<string>;
}

const GameScreenshotsSlider: React.FC<IGameScreenshotsSliderProps> = ({
  gameScreenshots,
  currentSlideLink,
  setCurrentSlideLink,
}) => {
  const initialSlide = gameScreenshots
    .map((screenshot) => screenshot.image)
    .findIndex((screenshotLink) => screenshotLink === currentSlideLink);

  return (
    <CSSTransitionWrapper isShow={!!currentSlideLink}>
      <div
        className={`fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-[rgba(0,_0,_0,_0.7)] opacity-0 transition-all duration-500`}
        onClick={() => setCurrentSlideLink("")}
      >
        <div
          className="max-h-max w-[65%] max-w-max select-none overflow-hidden rounded-3xl bg-[#1c1c1c] outline outline-4 outline-hover-color max-[1271px]:w-[85%] max-[897px]:w-[90%] max-[603px]:w-[95%]"
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            autoHeight={true}
            initialSlide={initialSlide}
            observer={true}
            observeParents={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            centeredSlides={true}
          >
            {gameScreenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.image}>
                <img src={`${screenshot.image}`} className="mx-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </CSSTransitionWrapper>
  );
};

export default GameScreenshotsSlider;
