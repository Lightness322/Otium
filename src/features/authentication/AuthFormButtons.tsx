import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { setIdleUserStatus } from "../../store/authenticationReducers/ActionCreatorsAuth";

import { LoaderType } from "../../enums/enums";

import Button from "../../ui/Button";
import Loader from "../../ui/Loader";

interface IAuthFormButtonsProps {
  isRegister: boolean;
  setIsRegister: (state: boolean) => void;
}

export const AuthFormButtons: React.FC<IAuthFormButtonsProps> = ({
  isRegister,
  setIsRegister,
}) => {
  const { status } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  return (
    <div className="relative flex justify-around">
      {!isRegister ? (
        <>
          <Button
            className="rounded-lg bg-primary-color p-3 text-2xl font-bold hover:outline hover:outline-font-secondary-color max-[450px]:text-xl"
            type="submit"
            disabled={status === "pending"}
            bg={false}
          >
            {status === "pending" ? (
              <Loader type={LoaderType.small} />
            ) : (
              <span>Вход</span>
            )}
          </Button>
          <Button
            className="rounded-lg bg-font-secondary-color p-3 text-2xl font-bold hover:outline hover:outline-font-primary-color max-[450px]:text-xl"
            onClick={() => {
              dispatch(setIdleUserStatus());
              setIsRegister(true);
            }}
            type="submit"
            disabled={status === "pending"}
            bg={false}
          >
            <span className="text-secondary-color">Регистрация</span>
          </Button>
        </>
      ) : (
        <Button
          className="animate-show rounded-lg bg-font-secondary-color p-3 text-2xl font-bold hover:outline hover:outline-font-primary-color max-[450px]:text-xl"
          type="submit"
          disabled={status === "pending"}
          bg={false}
        >
          {status === "pending" ? (
            <Loader color="var(--font-primary-color)" type={LoaderType.small} />
          ) : (
            <span className="text-secondary-color">Создать аккаунт</span>
          )}
        </Button>
      )}
    </div>
  );
};
