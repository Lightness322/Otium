import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStaffPerson } from "../../features/movies/types/IStaffPerson";

interface MovieStaffState {
  movieStaff: IStaffPerson[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieStaffState = {
  movieStaff: [],
  isLoading: false,
  error: "",
};

export const movieStaffSlice = createSlice({
  name: "movieStaff",
  initialState,
  reducers: {
    movieStaffFetch(state) {
      state.isLoading = true;
    },
    movieStaffFetchSuccess(state, action: PayloadAction<IStaffPerson[]>) {
      state.isLoading = false;
      state.error = "";
      state.movieStaff = action.payload;
    },
    movieStaffFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieStaffSlice.reducer;
