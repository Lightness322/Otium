import {
  IoAdd,
  IoCheckmark,
  IoCloseOutline,
  IoGameController,
} from "react-icons/io5";

interface IPlayedGamesUpdateIconProps {
  isPlayed: boolean;
  isHover: boolean;
  size: string;
  isMovieItemHover?: boolean;
  themeColor?: boolean;
}

const PlayedGamesUpdateIcon: React.FC<IPlayedGamesUpdateIconProps> = ({
  isPlayed,
  isHover,
  size,
  isMovieItemHover = true,
  themeColor = false,
}) => {
  return (
    <>
      {isPlayed && !isHover && (
        <div className="relative">
          <IoGameController
            color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
            size={size}
          />
          <IoCheckmark
            className="absolute bottom-[-5px] right-[-5px] rounded-full bg-black"
            color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
            size={(+size / 1.5).toString()}
          />
        </div>
      )}
      {isPlayed && isHover && (
        <div className="relative">
          <IoGameController size={size} color="#ef4444" />
          <IoCloseOutline
            className="absolute bottom-[-5px] right-[-5px] rounded-full bg-black"
            color="#ef4444"
            size={(+size / 1.5).toString()}
          />
        </div>
      )}
      {!isPlayed && isMovieItemHover && (
        <div className="relative">
          <IoGameController
            color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
            size={size}
          />
          <IoAdd
            className="absolute bottom-[-5px] right-[-5px] rounded-full bg-black"
            color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
            size={(+size / 1.5).toString()}
          />
        </div>
      )}
    </>
  );
};

export default PlayedGamesUpdateIcon;
