import supabase from "../../services/supabase";

import { AppDispatch } from "../store";
import { wishlistMoviesSlice } from "./WishlistMoviesSlice";

import { IWishlistMovie } from "../../features/list/types/IWishlistMovie";

export const fetchWishlistMovies =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistMoviesSlice.actions.wishlistMoviesFetch());

      const { data: wishlistMovies, error } = await supabase
        .from("wishlistMovies")
        .select("*")
        .eq("userId", userId)
        .returns<IWishlistMovie[] | []>();

      if (error) throw new Error(error.message);

      dispatch(
        wishlistMoviesSlice.actions.wishlistMoviesFetchSuccess(wishlistMovies),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          wishlistMoviesSlice.actions.wishlistMoviesFetchError(e.message),
        );
      }
    }
  };

export const insertWishlistMovie =
  ({ ...args }: IWishlistMovie) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistMoviesSlice.actions.wishlistMoviesFetch());

      const { data: wishlistMovie, error } = await supabase
        .from("wishlistMovies")
        .insert([{ ...args }])
        .select()
        .returns<IWishlistMovie[]>();
      if (error) throw new Error(error.message);

      dispatch(
        wishlistMoviesSlice.actions.wishlistMoviesInsertSuccess(wishlistMovie),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          wishlistMoviesSlice.actions.wishlistMoviesFetchError(e.message),
        );
      }
    }
  };

export const deleteWishlistMovie =
  (movieRowId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(wishlistMoviesSlice.actions.wishlistMoviesDelete(movieRowId));

      const { error } = await supabase
        .from("wishlistMovies")
        .delete()
        .eq("id", `${movieRowId}`);
      if (error) throw new Error(error.message);

      dispatch(
        wishlistMoviesSlice.actions.wishlistMoviesDeleteSuccess(movieRowId),
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(
          wishlistMoviesSlice.actions.wishlistMoviesFetchError(e.message),
        );
      }
    }
  };
