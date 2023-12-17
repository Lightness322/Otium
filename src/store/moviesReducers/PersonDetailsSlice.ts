import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStaffPersonDetails } from "../../features/movies/types/IStaffPersonDetails";

interface IPersonDetailsState {
  personDetails: IStaffPersonDetails;
  isLoading: boolean;
  error: string;
}

const initialState: IPersonDetailsState = {
  personDetails: {} as IStaffPersonDetails,
  isLoading: false,
  error: "",
};

export const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {
    personDetailsFetch(state) {
      state.isLoading = true;
    },
    personDetailsFetchSuccess(
      state,
      action: PayloadAction<IStaffPersonDetails>,
    ) {
      state.isLoading = false;
      state.error = "";
      state.personDetails = action.payload;
    },
    personDetailsFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default personDetailsSlice.reducer;
