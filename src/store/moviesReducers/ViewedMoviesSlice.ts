import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export interface ViewedMoviesState {
  viewedMoviesIds: number[];
  isLoading: boolean;
  error: string;
}

const initialState: ViewedMoviesState = {
  viewedMoviesIds: [],
  isLoading: false,
  error: "",
};

export const viewedMoviesSlice = createSlice({
  name: "viewedMovies",
  initialState,
  reducers: {
    viewedMoviesFetch(state) {
      state.isLoading = true;
    },
    viewedMoviesFetchSuccess(state, action: PayloadAction<number[]>) {
      state.viewedMoviesIds = action.payload;
      state.isLoading = false;
    },
    viewedMoviesInsertSuccess(state, action: PayloadAction<number>) {
      state.viewedMoviesIds.push(action.payload);
      state.isLoading = false;
    },
    viewedMoviesDeleteSuccess(state, action: PayloadAction<number>) {
      state.viewedMoviesIds = current(state.viewedMoviesIds).filter(
        (movieId) => movieId !== action.payload,
      );
      state.isLoading = false;
    },
    viewedMoviesFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default viewedMoviesSlice.reducer;
