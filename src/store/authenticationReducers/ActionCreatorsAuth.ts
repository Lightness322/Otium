import supabase from "../../services/supabase";

import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

interface ILogInArguments {
  email: string;
  password: string;
}

interface ISignInArguments extends ILogInArguments {
  nickname: string;
}

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetch());

    const { data: session, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);

    if (!session.session) {
      dispatch(userSlice.actions.userFetchSuccess(null));
    } else {
      const { data, error } = await supabase.auth.getUser();

      if (error) throw new Error(error.message);

      dispatch(
        userSlice.actions.userFetchSuccess({
          userId: data.user.id,
          email: data.user.email!,
          nickname: data.user.user_metadata.nickname,
        }),
      );
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(userSlice.actions.userFetchError(e.message));
    }
  }
};

export const logIn =
  ({ email, password }: ILogInArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetch());

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (data.user)
        dispatch(
          userSlice.actions.userFetchSuccess({
            userId: data.user.id,
            email: data.user.email!,
            nickname: data.user.user_metadata.nickname,
          }),
        );

      if (error) throw new Error(error.message);
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(userSlice.actions.userFetchError(e.message));
      }
    }
  };

export const signUp =
  ({ email, password, nickname }: ISignInArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetch());

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
          },
        },
      });

      if (data.user)
        dispatch(
          userSlice.actions.userFetchSuccess({
            userId: data.user.id,
            email: data.user.email!,
            nickname: data.user.user_metadata.nickname,
          }),
        );

      if (error) throw new Error(error.message);
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(userSlice.actions.userFetchError(e.message));
      }
    }
  };

export const logOut = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetch());

    const { error } = await supabase.auth.signOut();

    dispatch(
      userSlice.actions.userFetchSuccess({
        userId: null,
        email: "",
        nickname: "",
      }),
    );

    if (error) throw new Error(error.message);
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(userSlice.actions.userFetchError(e.message));
    }
  }
};

export const setIdleUserStatus = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userSetStatusIdle());
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(userSlice.actions.userFetchError(e.message));
    }
  }
};
