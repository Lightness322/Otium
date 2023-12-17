import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { IWishlistMovie } from "../../features/list/types/IWishlistMovie";

export interface WishlistMoviesState {
  wishlistMovies: IWishlistMovie[];
  deletingRowId: number | null;
  isLoading: boolean;
  error: string;
}

const initialState: WishlistMoviesState = {
  wishlistMovies: [],
  deletingRowId: null,
  isLoading: false,
  error: "",
};

export const wishlistMoviesSlice = createSlice({
  name: "wishlistMovies",
  initialState,
  reducers: {
    wishlistMoviesFetch(state) {
      state.isLoading = true;
    },
    wishlistMoviesDelete(state, action: PayloadAction<number>) {
      state.deletingRowId = action.payload;
      state.isLoading = true;
    },
    wishlistMoviesFetchSuccess(
      state,
      action: PayloadAction<IWishlistMovie[] | null>,
    ) {
      if (action.payload !== null) {
        state.wishlistMovies = action.payload;
      }
      state.isLoading = false;
    },
    wishlistMoviesInsertSuccess(
      state,
      action: PayloadAction<IWishlistMovie[]>,
    ) {
      state.wishlistMovies = [
        ...current(state.wishlistMovies),
        ...action.payload,
      ];
      state.isLoading = false;
    },
    wishlistMoviesDeleteSuccess(state, action: PayloadAction<number>) {
      state.wishlistMovies = current(state.wishlistMovies).filter(
        (movie) => movie.id !== action.payload,
      );
      state.deletingRowId = null;
      state.isLoading = false;
    },
    wishlistMoviesFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.deletingRowId = null;
      state.isLoading = false;
    },
  },
});

export default wishlistMoviesSlice.reducer;
