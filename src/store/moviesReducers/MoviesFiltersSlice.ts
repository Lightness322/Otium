import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MoviesFiltersState {
  keyword: string;
  genreId: string;
  countryId: string;
  ratingFrom: string;
  ratingTo: string;
  yearFrom: string;
  yearTo: string;
  type: string;
  order: string;
}

const initialState: MoviesFiltersState = {
  keyword: "",
  genreId: "",
  countryId: "",
  ratingFrom: "",
  ratingTo: "",
  yearFrom: "",
  yearTo: "",
  type: "ALL",
  order: "RATING",
};

export const moviesFiltersSlice = createSlice({
  name: "moviesFilters",
  initialState,
  reducers: {
    movieSetFilters(state, action: PayloadAction<MoviesFiltersState>) {
      state.keyword = action.payload.keyword;
      state.countryId = action.payload.countryId;
      state.genreId = action.payload.genreId;
      state.order = action.payload.order;
      state.ratingFrom = action.payload.ratingFrom;
      state.ratingTo = action.payload.ratingTo;
      state.yearFrom = action.payload.yearFrom;
      state.yearTo = action.payload.yearTo;
      state.type = action.payload.type;
    },
  },
});

export default moviesFiltersSlice.reducer;
