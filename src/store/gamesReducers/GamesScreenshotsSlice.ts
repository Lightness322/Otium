import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IGameScreenshot } from "../../features/games/types/IGameScreenshots";

interface GameScreenshotsState {
  gameScreenshots: IGameScreenshot[];
  isLoading: boolean;
  error: string;
}

const initialState: GameScreenshotsState = {
  gameScreenshots: [],
  isLoading: false,
  error: "",
};

export const gameScreenshotsSlice = createSlice({
  name: "gameScreenshots",
  initialState,
  reducers: {
    gameScreenshotsFetch(state) {
      state.isLoading = true;
    },
    gameScreenshotsFetchSuccess(
      state,
      action: PayloadAction<IGameScreenshot[]>,
    ) {
      state.isLoading = false;
      state.error = "";
      state.gameScreenshots = action.payload;
    },
    gameScreenshotsFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameScreenshotsSlice.reducer;
