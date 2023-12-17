import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IGame } from "../../features/games/types/IGame";

interface GamesPartOfSeriesState {
  gamesPartOfSeries: IGame[];
  isLoading: boolean;
  error: string;
}

const initialState: GamesPartOfSeriesState = {
  gamesPartOfSeries: [],
  isLoading: false,
  error: "",
};

export const gamesPartOfSeriesSlice = createSlice({
  name: "gamesPartOfSeries",
  initialState,
  reducers: {
    gamePartOfSeriesFetch(state) {
      state.isLoading = true;
    },
    gamePartOfSeriesFetchSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = "";
      state.gamesPartOfSeries = action.payload;
    },
    gamePartOfSeriesFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gamesPartOfSeriesSlice.reducer;
