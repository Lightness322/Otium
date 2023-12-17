import supabase from "../../services/supabase";

import { AppDispatch } from "../store";
import { playedGamesSlice } from "./PlayedGamesSlice";

interface IPlayedGames {
  playedGamesIds: number[];
}

interface IPlayedGamesArguments {
  playedGamesIds: number[];
  gameId: number;
  userId: string;
}

export const fetchPlayedGames =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(playedGamesSlice.actions.playedGamesFetch());

      const { data: playedGames, error } = await supabase
        .from("playedGames")
        .select("playedGamesIds")
        .eq("userId", userId)
        .returns<IPlayedGames[] | []>();

      if (error) throw new Error(error.message);

      if (playedGames.length !== 0) {
        dispatch(
          playedGamesSlice.actions.playedGamesFetchSuccess(
            playedGames.at(0)!.playedGamesIds,
          ),
        );
      } else {
        await supabase
          .from("playedGames")
          .insert([{ userId, playedGamesIds: [] }]);

        dispatch(playedGamesSlice.actions.playedGamesFetchSuccess([]));
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(playedGamesSlice.actions.playedGamesFetchError(e.message));
      }
    }
  };

export const insertPlayedGames =
  ({ playedGamesIds, gameId, userId }: IPlayedGamesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(playedGamesSlice.actions.playedGamesFetch());

      const { error } = await supabase
        .from("playedGames")
        .update({ playedGamesIds: [...playedGamesIds, gameId] })
        .eq("userId", userId)
        .select();

      if (error) throw new Error(error.message);

      if (playedGamesIds !== null) {
        dispatch(playedGamesSlice.actions.playedGamesInsertSuccess(gameId));
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(playedGamesSlice.actions.playedGamesFetchError(e.message));
      }
    }
  };

export const deletePlayedGames =
  ({ playedGamesIds, gameId, userId }: IPlayedGamesArguments) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(playedGamesSlice.actions.playedGamesFetch());

      const newPlayedGamesIds = playedGamesIds.filter(
        (playedGamesId) => playedGamesId !== gameId,
      );

      const { error } = await supabase
        .from("playedGames")
        .update({ playedGamesIds: newPlayedGamesIds })
        .eq("userId", userId)
        .select();

      if (error) throw new Error(error.message);

      dispatch(playedGamesSlice.actions.playedGamesDeleteSuccess(gameId));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(playedGamesSlice.actions.playedGamesFetchError(e.message));
      }
    }
  };
