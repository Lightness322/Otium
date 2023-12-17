import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IGameStore } from "../../features/games/types/IGameStore";

interface GameStoresState {
  gameStores: IGameStore[];
  isLoading: boolean;
  error: string;
}

const initialState: GameStoresState = {
  gameStores: [],
  isLoading: false,
  error: "",
};

export const gameStoresSlice = createSlice({
  name: "gameStores",
  initialState,
  reducers: {
    gameStoresFetch(state) {
      state.isLoading = true;
    },
    gameStoresFetchSuccess(state, action: PayloadAction<IGameStore[]>) {
      state.isLoading = false;
      state.error = "";
      state.gameStores = action.payload;
    },
    gameStoresFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameStoresSlice.reducer;
