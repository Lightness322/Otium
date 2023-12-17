import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum status {
  idle = "idle",
  pending = "pending",
  complete = "complete",
  failed = "failed",
}

interface UserState {
  userId: string | null;
  nickname: string;
  email: string;
  status?: status;
  error?: string;
}

const initialState: UserState = {
  userId: null,
  nickname: "",
  email: "",
  status: status.idle,
  error: "",
};

export const userSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {
    userFetch(state) {
      state.status = status.pending;
    },
    userFetchSuccess(state, action: PayloadAction<UserState | null>) {
      state.error = "";
      if (action.payload !== null) {
        state.userId = action.payload.userId;
        state.email = action.payload.email;
        state.nickname = action.payload.nickname;
      }
      state.status = status.complete;
    },
    userFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = status.failed;
    },
    userSetStatusIdle(state) {
      state.status = status.idle;
    },
  },
});

export default userSlice.reducer;
