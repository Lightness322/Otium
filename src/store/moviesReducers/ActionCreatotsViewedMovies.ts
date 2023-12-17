import supabase from "../../services/supabase";

import { AppDispatch } from "../store";
import { viewedMoviesSlice } from "./ViewedMoviesSlice";

interface IViewedMovies {
  viewedMoviesIds: number[];
}

interface IViewedMoviesArguments {
  viewedMoviesIds: number[];
  movieId: number;
  userId: string;
}

export const fetchViewedMovies =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(viewedMoviesSlice.actions.viewedMoviesFetch());

      const { data: viewedMovies, error } = await supabase
        .from("viewedMovies")
        .select("viewedMoviesIds")
        .eq("userId", userId)
        .returns<IViewedMovies[] | []>();

      if (error) throw new Error(error.message);

      if (viewedMovies.length !== 0) {
        dispatch(
          viewedMoviesSlice.actions.viewedMoviesFetchSuccess(
            viewedMovies.at(0)!.viewedMoviesIds,
          ),
        );
      } else {
        await supabase
          .from("viewedMovies")
          .insert([{ userId, viewedMoviesIds: [] }]);

        dispatch(viewedMoviesSlice.actions.viewedMoviesFetchSuccess([]));
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(viewedMoviesSlice.actions.viewedMoviesFetchError(e.message));
      }
    }
  };

export const insertViewedMovie =
  ({ viewedMoviesIds, movieId, userId }: IViewedMoviesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(viewedMoviesSlice.actions.viewedMoviesFetch());

      const { error } = await supabase
        .from("viewedMovies")
        .update({ viewedMoviesIds: [...viewedMoviesIds, movieId] })
        .eq("userId", userId)
        .select();

      if (error) throw new Error(error.message);

      if (viewedMoviesIds !== null) {
        dispatch(viewedMoviesSlice.actions.viewedMoviesInsertSuccess(movieId));
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(viewedMoviesSlice.actions.viewedMoviesFetchError(e.message));
      }
    }
  };

export const deleteViewedMovie =
  ({ viewedMoviesIds, movieId, userId }: IViewedMoviesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(viewedMoviesSlice.actions.viewedMoviesFetch());

      const newViewedMoviesIds = viewedMoviesIds.filter(
        (viewedMovieId) => viewedMovieId !== movieId,
      );

      const { error } = await supabase
        .from("viewedMovies")
        .update({ viewedMoviesIds: newViewedMoviesIds })
        .eq("userId", userId)
        .select();

      if (error) throw new Error(error.message);

      dispatch(viewedMoviesSlice.actions.viewedMoviesDeleteSuccess(movieId));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(viewedMoviesSlice.actions.viewedMoviesFetchError(e.message));
      }
    }
  };
