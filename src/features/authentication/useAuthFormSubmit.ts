import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";

import {
  logIn,
  signUp,
} from "../../store/authenticationReducers/ActionCreatorsAuth";

import { IAuthFormData } from "./types/IAuthFormData";

export function useAuthFormSubmit(isRegister: boolean) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IAuthFormData>({
    mode: "all",
    defaultValues: { email: "test@mail.ru", password: "test11" },
  });

  const dispatch = useAppDispatch();

  function onSubmit(data: IAuthFormData) {
    if (isRegister) {
      dispatch(
        signUp({
          email: data.email,
          nickname: data.nickname,
          password: data.password,
        }),
      );
    } else {
      dispatch(logIn({ email: data.email, password: data.password }));
    }
  }

  return { onSubmit, errors, register, reset, handleSubmit };
}
