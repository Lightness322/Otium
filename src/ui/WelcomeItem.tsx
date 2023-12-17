import { useState } from "react";
import { useNavigate } from "react-router";

import { MdMovieFilter } from "react-icons/md";
import { TfiGame } from "react-icons/tfi";
import CSSTransitionWrapper from "./CSSTransitionWrapper";

interface IWelcomeItemProps {
  title: string;
  src: string;
  to: string;
  list?: boolean;
}

const WelcomeItem: React.FC<IWelcomeItemProps> = ({
  title,
  src,
  to,
  list = false,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div
      className={`relative w-[300px] cursor-pointer rounded-2xl border-solid border-[#b6b6b6] ${
        isHover ? "scale-110" : ""
      } overflow-hidden shadow-[0px_10px_30px_5px_rgba(0,0,0,0.8)] transition-all max-[688px]:w-[250px]`}
      onClick={() => {
        if (list === false) navigate(`${to}`);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className="absolute left-0 top-0 h-full w-full object-cover brightness-75 filter"
        src={`${src}`}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(0deg,_rgba(0,0,0,0.90)_19%,_rgba(255,255,255,0.1)_59%)]"></div>
      <span
        className={`absolute bottom-1 w-full text-center font-bold ${
          isHover ? "text-white" : "text-[#b6b6b6]"
        }`}
      >
        {title}
      </span>
      {list && (
        <CSSTransitionWrapper isShow={isHover}>
          <div className="absolute top-[calc(50%-30px)] flex w-full justify-around text-[#919090]">
            <button
              className="transition-transform hover:scale-110 hover:text-white"
              onClick={() => navigate("list/movies")}
            >
              <MdMovieFilter size="60" />
            </button>
            <button
              className="transition-transform hover:scale-110 hover:text-white"
              onClick={() => navigate("list/games")}
            >
              <TfiGame size="60" />
            </button>
          </div>
        </CSSTransitionWrapper>
      )}
    </div>
  );
};

export default WelcomeItem;
