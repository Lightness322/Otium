import { TbEyeCheck, TbEyePlus, TbEyeX } from "react-icons/tb";

interface IViewedMoviesUpdateIconProps {
  isViewed: boolean;
  isHover: boolean;
  size: string;
  isMovieItemHover?: boolean;
  themeColor?: boolean;
}

const ViewedMoviesUpdateIcon: React.FC<IViewedMoviesUpdateIconProps> = ({
  isViewed,
  isHover,
  size,
  isMovieItemHover = true,
  themeColor = false,
}) => {
  return (
    <>
      {isViewed && !isHover && (
        <TbEyeCheck
          color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
          size={size}
        />
      )}
      {isViewed && isHover && <TbEyeX color="#ef4444" size={size} />}
      {!isViewed && isMovieItemHover && (
        <TbEyePlus
          color={`${themeColor ? "var(--font-primary-color)" : "#fff"}`}
          size={size}
        />
      )}
    </>
  );
};

export default ViewedMoviesUpdateIcon;
