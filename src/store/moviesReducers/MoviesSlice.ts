import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { IMovie } from "../../features/movies/types/IMovie";

interface MoviesState {
  movies: IMovie[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  totalPages: 0,
  currentPage: 1,
  isLoading: false,
  error: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesFetch(state) {
      state.isLoading = true;
    },
    moviesFetchSuccess(state, action: PayloadAction<IMovie[]>) {
      state.isLoading = false;
      state.error = "";

      if (state.currentPage !== 1 && action.payload.length === 0) {
        state.totalPages = 2;
      }

      if (state.currentPage === 1) {
        state.movies = action.payload;
      } else {
        const uniqueArray = [
          ...current(state.movies),
          ...action.payload,
        ].filter((value, index) => {
          const _value = JSON.stringify(value);
          return (
            index ===
            [...current(state.movies), ...action.payload].findIndex((obj) => {
              return JSON.stringify(obj) === _value;
            })
          );
        });

        state.movies = uniqueArray;
      }
    },
    moviesFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    moviesSetTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    moviesSetCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export default moviesSlice.reducer;
