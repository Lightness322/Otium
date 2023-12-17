import { useState } from "react";
import { useNavigate } from "react-router";

import { PiFilmStripFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa6";
import Button from "../../ui/Button";

interface IWishlistEmptyProps {
  title: string;
  navigateTo: string;
  btnText: string;
  type: "movie" | "game";
}

const WishlistEmpty: React.FC<IWishlistEmptyProps> = ({
  title,
  navigateTo,
  btnText,
  type,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-110px)] w-full flex-col items-center justify-center gap-y-5">
      <div className="text-3xl">{title}</div>
      <Button
        className="hover:outline-font-secondary-color-color flex items-center gap-x-2 rounded-xl p-5 hover:outline"
        onClick={() => navigate(navigateTo)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className="text-lg">{btnText}</span>
        <span>
          {type === "movie" && (
            <PiFilmStripFill
              className={`${
                isHover ? "top-[calc(50%-9px)] animate-bounce" : ""
              }`}
              size="36"
            />
          )}
          {type === "game" && (
            <FaGamepad
              className={`${
                isHover ? "top-[calc(50%-9px)] animate-bounce" : ""
              }`}
              size="36"
            />
          )}
        </span>
      </Button>
    </div>
  );
};

export default WishlistEmpty;
