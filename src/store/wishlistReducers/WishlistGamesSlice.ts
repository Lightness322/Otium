import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { IWishlistGame } from "../../features/list/types/IWishlistGame";

export interface WishlistGamesState {
  wishlistGames: IWishlistGame[];
  deletingRowId: number | null;
  isLoading: boolean;
  error: string;
}

const initialState: WishlistGamesState = {
  wishlistGames: [],
  deletingRowId: null,
  isLoading: false,
  error: "",
};

export const wishlistGamesSlice = createSlice({
  name: "wishlistGames",
  initialState,
  reducers: {
    wishlistGamesFetch(state) {
      state.isLoading = true;
    },
    wishlistGamesDelete(state, action: PayloadAction<number>) {
      state.deletingRowId = action.payload;
      state.isLoading = true;
    },
    wishlistGamesFetchSuccess(
      state,
      action: PayloadAction<IWishlistGame[] | null>,
    ) {
      if (action.payload !== null) {
        state.wishlistGames = action.payload;
      }
      state.isLoading = false;
    },
    wishlistGamesInsertSuccess(state, action: PayloadAction<IWishlistGame[]>) {
      state.wishlistGames = [
        ...current(state.wishlistGames),
        ...action.payload,
      ];
      state.isLoading = false;
    },
    wishlistGamesDeleteSuccess(state, action: PayloadAction<number>) {
      state.wishlistGames = current(state.wishlistGames).filter(
        (movie) => movie.id !== action.payload,
      );
      state.deletingRowId = null;
      state.isLoading = false;
    },
    wishlistGamesFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.deletingRowId = null;
      state.isLoading = false;
    },
  },
});

export default wishlistGamesSlice.reducer;
