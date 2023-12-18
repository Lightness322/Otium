import { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useOutsideClick } from "../hooks/useClickOutside";

import { MdMovieFilter } from "react-icons/md";
import { TfiGame } from "react-icons/tfi";
import HeaderLinkItem from "./HeaderLinkItem";
import CSSTransitionWrapper from "./CSSTransitionWrapper";
import HeaderMenuButton from "./HeaderMenuButton";

const HeaderLinkItems: React.FC = () => {
  const [isListLinkHover, setIsListLinkHover] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const { refBtn, refMenu } = useOutsideClick(isShowMenu, handleShowMenu);

  function handleListMenu() {
    setIsListLinkHover((isHover) => !isHover);
  }

  function handleShowMenu() {
    setIsShowMenu((isShow) => {
      setIsListLinkHover(false);
      return !isShow;
    });
  }

  return (
    <>
      {userId && (
        <>
          <ul
            className={`left-[100%] top-[70px] flex grow justify-evenly font-medium transition-all duration-300 max-md:fixed max-md:w-[160px] max-md:flex-col max-md:gap-y-4 max-md:rounded-bl-3xl max-md:border-0 max-md:border-t-[1px] max-md:border-solid max-md:border-black max-md:bg-primary-color max-md:p-4 ${
              isShowMenu ? "-translate-x-[160px]" : "translate-x-0"
            }`}
            ref={refMenu}
          >
            <HeaderLinkItem to="movies">
              <span
                onClick={() => {
                  if (isShowMenu) setIsShowMenu(false);
                }}
              >
                Фильмы
              </span>
            </HeaderLinkItem>
            <HeaderLinkItem to="games">
              <span
                onClick={() => {
                  if (isShowMenu) setIsShowMenu(false);
                }}
              >
                Игры
              </span>
            </HeaderLinkItem>
            <div className="relative">
              <HeaderLinkItem to="list" prevent={true}>
                <button onClick={handleListMenu}>Список</button>
              </HeaderLinkItem>
              <CSSTransitionWrapper isShow={isListLinkHover}>
                <ul className="absolute bottom-[-75px] left-[-24px] -z-10 flex w-[120px] animate-show justify-between gap-x-2 rounded-b-md bg-primary-color p-3 [border-top:_1px_solid_#000] max-md:static max-md:animate-none">
                  <HeaderLinkItem to="list/movies">
                    <span
                      onClick={() => {
                        setIsShowMenu(false);
                        setIsListLinkHover(false);
                      }}
                    >
                      <MdMovieFilter size="30" />
                    </span>
                  </HeaderLinkItem>
                  <HeaderLinkItem to="list/games">
                    <span
                      onClick={() => {
                        setIsShowMenu(false);
                        setIsListLinkHover(false);
                      }}
                    >
                      <TfiGame size="30" />
                    </span>
                  </HeaderLinkItem>
                </ul>
              </CSSTransitionWrapper>
            </div>
          </ul>
          <HeaderMenuButton isShowMenu={isShowMenu} refBtn={refBtn} />
        </>
      )}
    </>
  );
};

export default HeaderLinkItems;
