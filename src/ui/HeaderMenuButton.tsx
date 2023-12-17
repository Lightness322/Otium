interface IHeaderMenuButtonProps {
  handleShowMenu: () => void;
  isShowMenu: boolean;
}

const HeaderMenuButton: React.FC<IHeaderMenuButtonProps> = ({
  handleShowMenu,
  isShowMenu,
}) => {
  return (
    <button
      className={`relative mr-5 hidden h-[20px] w-[25px] max-md:flex max-md:justify-center`}
      onClick={handleShowMenu}
    >
      <span
        className={`absolute top-0 block h-[2px] w-full bg-font-primary-color transition-all duration-300 ${
          isShowMenu ? "top-[calc(50%-1px)] rotate-45" : ""
        }`}
      ></span>
      <span
        className={`absolute top-[calc(50%-1px)] block h-[2px] w-full bg-font-primary-color transition-all duration-300 ${
          isShowMenu ? "mx-auto w-[0%]" : ""
        }`}
      ></span>
      <span
        className={`absolute bottom-0 block h-[2px] w-full bg-font-primary-color transition-all duration-300 ${
          isShowMenu ? "bottom-[calc(50%-1px)] -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default HeaderMenuButton;
