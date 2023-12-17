import { Dispatch, SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useAuthFormSubmit } from "./useAuthFormSubmit";

import { setIdleUserStatus } from "../../store/authenticationReducers/ActionCreatorsAuth";

import { FieldFormValue } from "../../enums/enums";

import { AuthFormButtons } from "./AuthFormButtons";
import AuthFormInput from "./AuthFormInput";

interface IAuthFormProps {
  isRegister: boolean;
  isModalActive: boolean;
  setIsRegister: (state: boolean) => void;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  isRegister,
  setIsRegister,
  isModalActive,
  setIsModalActive,
}) => {
  const { status } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  const { onSubmit, handleSubmit, register, errors, reset } =
    useAuthFormSubmit(isRegister);

  useEffect(() => {
    if (status === "complete") {
      setIsModalActive(false);
      dispatch(setIdleUserStatus());
    }
  }, [status, dispatch, setIsModalActive]);

  useEffect(() => {
    if (isModalActive === false) {
      dispatch(setIdleUserStatus());
      reset();
      setIsRegister(false);
    }
  }, [isModalActive, reset, dispatch, setIsRegister]);

  return (
    <form
      className="absolute left-[calc(50%-250px)] top-[calc(50%-171px)] w-[500px] rounded-3xl border-solid border-font-secondary-color bg-secondary-color p-10 shadow-[0px_10px_30px_5px_rgba(0,0,0,0.8)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8 flex flex-col gap-y-8">
        {isRegister && (
          <AuthFormInput
            label="Никнейм"
            formValue={FieldFormValue.nickname}
            errors={errors}
            register={register}
          />
        )}
        <AuthFormInput
          label="Почта"
          formValue={FieldFormValue.email}
          errors={errors}
          register={register}
        />
        <AuthFormInput
          label="Пароль"
          formValue={FieldFormValue.password}
          errors={errors}
          register={register}
        />
      </div>
      <div className="absolute bottom-2 left-0 w-full text-center text-[15px] text-red-600">
        {status === "failed" && isRegister && (
          <span>Пользователь с данной почтой уже существует</span>
        )}
        {status === "failed" && !isRegister && (
          <span>Неверная почта или пароль</span>
        )}
      </div>
      <AuthFormButtons isRegister={isRegister} setIsRegister={setIsRegister} />
    </form>
  );
};

export default AuthForm;