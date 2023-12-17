import supabase from "../../services/supabase";

import { AppDispatch } from "../store";
import { wishlistGamesSlice } from "./WishlistGamesSlice";

import { IWishlistGame } from "../../features/list/types/IWishlistGame";

export const fetchWishlistGames =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistGamesSlice.actions.wishlistGamesFetch());

      const { data: wishlistGames, error } = await supabase
        .from("wishlistGames")
        .select("*")
        .eq("userId", userId)
        .returns<IWishlistGame[] | []>();

      if (error) throw new Error(error.message);

      dispatch(
        wishlistGamesSlice.actions.wishlistGamesFetchSuccess(wishlistGames),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(wishlistGamesSlice.actions.wishlistGamesFetchError(e.message));
      }
    }
  };

export const insertWishlistGame =
  ({ ...args }: IWishlistGame) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistGamesSlice.actions.wishlistGamesFetch());

      const { data: wishlistGame, error } = await supabase
        .from("wishlistGames")
        .insert([{ ...args }])
        .select()
        .returns<IWishlistGame[]>();
      if (error) throw new Error(error.message);

      dispatch(
        wishlistGamesSlice.actions.wishlistGamesInsertSuccess(wishlistGame),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(wishlistGamesSlice.actions.wishlistGamesFetchError(e.message));
      }
    }
  };

export const deleteWishlistGame =
  (movieRowId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistGamesSlice.actions.wishlistGamesDelete(movieRowId));

      const { error } = await supabase
        .from("wishlistGames")
        .delete()
        .eq("id", `${movieRowId}`);
      if (error) throw new Error(error.message);

      dispatch(
        wishlistGamesSlice.actions.wishlistGamesDeleteSuccess(movieRowId),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(wishlistGamesSlice.actions.wishlistGamesFetchError(e.message));
      }
    }
  };
