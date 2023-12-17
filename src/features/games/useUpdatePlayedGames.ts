import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import {
  deletePlayedGames,
  insertPlayedGames,
} from "../../store/gamesReducers/ActionCreatorsPlayedGames";

export function useUpdatePlayedGames(gameId: number) {
  const { playedGamesIds, isLoading: isPlayedLoading } = useAppSelector(
    (state) => state.playedGamesReducer,
  );

  const { userId } = useAppSelector((state) => state.userSliceReducer);

  const dispatch = useAppDispatch();

  const isPlayed = !!playedGamesIds.find((playedId) => playedId === gameId);

  function handlePlayedGamesUpdate() {
    if (isPlayed) {
      dispatch(deletePlayedGames({ playedGamesIds, gameId, userId: userId! }));
    } else {
      dispatch(insertPlayedGames({ playedGamesIds, gameId, userId: userId! }));
    }
  }

  return {
    isPlayed,
    isPlayedLoading,
    handlePlayedGamesUpdate,
  };
}
