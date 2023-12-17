import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IGameDetails } from "../../features/games/types/IGameDetails";

interface GameDetailsState {
  gameDetails: IGameDetails;
  isLoading: boolean;
  error: string;
}

const initialState: GameDetailsState = {
  gameDetails: {} as IGameDetails,
  isLoading: false,
  error: "",
};

export const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {
    gameDetailsFetch(state) {
      state.isLoading = true;
    },
    gameDetailsFetchSuccess(state, action: PayloadAction<IGameDetails>) {
      state.isLoading = false;
      state.error = "";
      state.gameDetails = action.payload;
    },
    gameDetailsFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameDetailsSlice.reducer;
