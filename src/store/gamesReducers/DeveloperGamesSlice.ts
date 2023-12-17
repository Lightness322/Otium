import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

import { IGame } from "../../features/games/types/IGame";

interface DeveloperGamesState {
  developerGames: IGame[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  error: string;
  developerName: string;
}

const initialState: DeveloperGamesState = {
  developerGames: [],
  totalPages: 0,
  currentPage: 1,
  isLoading: false,
  error: "",
  developerName: "",
};

export const developerGamesSlice = createSlice({
  name: "developerGames",
  initialState,
  reducers: {
    developerGamesFetch(state) {
      state.isLoading = true;
    },
    developerGamesFetchSuccess(state, action: PayloadAction<IGame[]>) {
      state.isLoading = false;
      state.error = "";

      if (state.currentPage !== 1 && action.payload.length === 0) {
        state.totalPages = 2;
      }

      if (state.currentPage === 1) {
        state.developerGames = action.payload;
      } else {
        state.developerGames = [
          ...current(state.developerGames),
          ...action.payload,
        ];
      }
    },
    developerGamesFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    developerGamesSetTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    developerGamesSetCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    developerGamesSetName(state, action: PayloadAction<string>) {
      state.developerName = action.payload;
    },
  },
});

export default developerGamesSlice.reducer;
