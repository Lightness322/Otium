import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export interface PlayedGamesState {
  playedGamesIds: number[];
  isLoading: boolean;
  error: string;
}

const initialState: PlayedGamesState = {
  playedGamesIds: [],
  isLoading: false,
  error: "",
};

export const playedGamesSlice = createSlice({
  name: "playedGames",
  initialState,
  reducers: {
    playedGamesFetch(state) {
      state.isLoading = true;
    },
    playedGamesFetchSuccess(state, action: PayloadAction<number[]>) {
      state.playedGamesIds = action.payload;
      state.isLoading = false;
    },
    playedGamesInsertSuccess(state, action: PayloadAction<number>) {
      state.playedGamesIds.push(action.payload);
      state.isLoading = false;
    },
    playedGamesDeleteSuccess(state, action: PayloadAction<number>) {
      state.playedGamesIds = current(state.playedGamesIds).filter(
        (gameId) => gameId !== action.payload,
      );
      state.isLoading = false;
    },
    playedGamesFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default playedGamesSlice.reducer;
