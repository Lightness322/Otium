import { useState } from "react";

import { LoaderType } from "../enums/enums";

import { CgPlayListAdd } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { CgPlayListRemove } from "react-icons/cg";
import Button from "./Button";
import Loader from "./Loader";

interface IUpdateWishlistButtonProps {
  isInWishlist: boolean;
  className?: string;
  isLoading: boolean;
  size?: string;
  isMovieItemHover?: boolean;
  bg?: boolean;
  updateFunction: () => void;
  themeColor?: boolean;
}

const UpdateWishlistButton: React.FC<IUpdateWishlistButtonProps> = ({
  isInWishlist,
  className,
  isLoading,
  size = 30,
  isMovieItemHover = true,
  bg = true,
  updateFunction,
  themeColor = false,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Button
      className={`${className}`}
      onClick={updateFunction}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={isLoading}
      bg={bg}
    >
      {isLoading && isMovieItemHover ? (
        <Loader type={LoaderType.small} />
      ) : (
        <>
          {isInWishlist && !isHover && (
            <CgPlayListCheck className="text-green-600" size={size} />
          )}
          {isInWishlist && isHover && (
            <CgPlayListRemove
              className="translate-y-[2px] text-red-500"
              size={size}
            />
          )}
          {!isInWishlist && isMovieItemHover && (
            <CgPlayListAdd
              color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
              size={size}
            />
          )}
        </>
      )}
    </Button>
  );
};

export default UpdateWishlistButton;
