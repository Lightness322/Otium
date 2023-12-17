import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { logOut } from "../store/authenticationReducers/ActionCreatorsAuth";

import { TypeSetStateFunction } from "../types/TypeSetStateFunction";

import { IoExitOutline } from "react-icons/io5";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";

interface IHeaderButtonsProps {
  setIsModalActive: TypeSetStateFunction<boolean>;
}

const HeaderButtons: React.FC<IHeaderButtonsProps> = ({ setIsModalActive }) => {
  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-x-4">
      <DarkModeToggle />
      {userId ? (
        <button onClick={() => dispatch(logOut())}>
          <IoExitOutline size="30" />
        </button>
      ) : (
        <Button
          className="rounded-md p-[3px] px-2 font-medium text-font-secondary-color outline-2 hover:text-font-primary-color hover:outline hover:outline-font-secondary-color"
          onClick={() => setIsModalActive((isActive) => !isActive)}
          bg={true}
        >
          <span>Войти</span>
        </Button>
      )}
    </div>
  );
};

export default HeaderButtons;
