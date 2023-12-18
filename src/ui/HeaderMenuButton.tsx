import { LegacyRef } from "react";

interface IHeaderMenuButtonProps {
  isShowMenu: boolean;
  refBtn: LegacyRef<HTMLButtonElement>;
}

const HeaderMenuButton: React.FC<IHeaderMenuButtonProps> = ({
  isShowMenu,
  refBtn,
}) => {
  return (
    <button
      className={`relative mr-5 hidden h-[20px] w-[25px] max-md:flex max-md:justify-center`}
      ref={refBtn}
    >
      <span
        className={`absolute top-0 block h-[2px] w-full bg-font-primary-color transition-all duration-300 ${
          isShowMenu ? "top-[calc(50%-1px)] rotate-45" : ""
        } pointer-events-none`}
      ></span>
      {isShowMenu ? (
        <span
          className={
            "pointer-events-none absolute top-[calc(50%-1px)] mx-auto block h-[2px] w-[0%] bg-font-primary-color transition-all duration-300"
          }
        ></span>
      ) : (
        <span
          className={
            "pointer-events-none absolute top-[calc(50%-1px)] block h-[2px] w-full bg-font-primary-color transition-all duration-300"
          }
        ></span>
      )}
      <span
        className={`absolute bottom-0 block h-[2px] w-full bg-font-primary-color transition-all duration-300 ${
          isShowMenu ? "bottom-[calc(50%-1px)] -rotate-45" : ""
        } pointer-events-none`}
      ></span>
    </button>
  );
};

export default HeaderMenuButton;
