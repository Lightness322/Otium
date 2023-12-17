import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

import { IGame } from "../../features/games/types/IGame";

interface GamesState {
  games: IGame[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  error: string;
}

const initialState: GamesState = {
  games: [],
  totalPages: 0,
  currentPage: 1,
  isLoading: false,
  error: "",
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    gamesFetch(state) {
      state.isLoading = true;
    },
    gamesFetchSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = "";

      if (state.currentPage !== 1 && action.payload.length === 0) {
        state.totalPages = 2;
      }

      if (state.currentPage === 1) {
        state.games = action.payload;
      } else {
        state.games = [...current(state.games), ...action.payload];
      }
    },
    gamesFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    gamesSetTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    gamesSetCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export default gamesSlice.reducer;
