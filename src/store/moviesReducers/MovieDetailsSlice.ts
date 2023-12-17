import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IMovieDetails } from "../../features/movies/types/IMovieDetails";

interface MovieDetailsState {
  movieDetails: IMovieDetails;
  isLoading: boolean;
  error: string;
}

const initialState: MovieDetailsState = {
  movieDetails: {} as IMovieDetails,
  isLoading: false,
  error: "",
};

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    movieDetailsFetch(state) {
      state.isLoading = true;
    },
    movieDetailsFetchSuccess(state, action: PayloadAction<IMovieDetails>) {
      state.isLoading = false;
      state.error = "";
      state.movieDetails = action.payload;
    },
    movieDetailsFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieDetailsSlice.reducer;
