import { TypeSetStateFunction } from "../types/TypeSetStateFunction";

import WelcomeTitles from "./WelcomeTitles";
import WelcomeItem from "./WelcomeItem";
import Button from "./Button";

interface IWelcomeContentProps {
  userId: string | null;
  setIsModalActive: TypeSetStateFunction<boolean>;
}

const WelcomeContent: React.FC<IWelcomeContentProps> = ({
  userId,
  setIsModalActive,
}) => {
  return (
    <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-y-14 max-lg:mt-10 max-[563px]:mt-0 max-[563px]:h-full max-[563px]:gap-y-6">
      <WelcomeTitles />
      {userId ? (
        <div className="flex h-[225px] w-full justify-around gap-12 max-lg:h-[490px] max-lg:flex-wrap max-lg:justify-center max-[688px]:h-[380px] max-[688px]:gap-6 max-[563px]:h-[540px]">
          <WelcomeItem title="ФИЛЬМЫ" src="oppenheimer.jpg" to="movies" />
          <WelcomeItem title="ИГРЫ" src="bg3.jpeg" to="games" />
          <WelcomeItem title="СПИСОК" src="harry.jpg" to="list" list={true} />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Button
            className="rounded-lg p-3 text-xl font-bold text-font-secondary-color outline outline-[font-secondary-color] hover:bg-font-secondary-color hover:text-secondary-color"
            onClick={() => setIsModalActive(true)}
            bg={false}
          >
            <span>Начать</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default WelcomeContent;
