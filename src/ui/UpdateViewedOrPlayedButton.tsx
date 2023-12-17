import { useState } from "react";

import { LoaderType } from "../enums/enums";

import PlayedGamesUpdateIcon from "./PlayedGamesUpdateIcon";
import ViewedMoviesUpdateIcon from "./ViewedMoviesUpdateIcon";
import Button from "./Button";
import Loader from "./Loader";

interface IUpdateViewedOrPlayedButton {
  isPlayedOrViewed: boolean;
  isMovieItemHover?: boolean;
  isLoading: boolean;
  className?: string;
  size?: string;
  bg?: boolean;
  updateFunction: () => void;
  type: "movie" | "game";
  themeColor?: boolean;
}

const UpdateViewedOrPlayedButton: React.FC<IUpdateViewedOrPlayedButton> = ({
  isPlayedOrViewed,
  isMovieItemHover = true,
  isLoading,
  className,
  size = "25",
  bg = true,
  updateFunction,
  type,
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
          {type === "movie" ? (
            <ViewedMoviesUpdateIcon
              isViewed={isPlayedOrViewed}
              isHover={isHover}
              size={size}
              isMovieItemHover={isMovieItemHover}
              themeColor={themeColor}
            />
          ) : (
            <PlayedGamesUpdateIcon
              isPlayed={isPlayedOrViewed}
              isHover={isHover}
              size={size}
              isMovieItemHover={isMovieItemHover}
              themeColor={themeColor}
            />
          )}
        </>
      )}
    </Button>
  );
};

export default UpdateViewedOrPlayedButton;
