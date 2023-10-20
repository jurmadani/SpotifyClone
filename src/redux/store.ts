import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "./signupSlice";
import { accessSlice } from "./accessSlice";
import { searchTrackSlice } from "./searchTrackSlice";
import { playerSlice } from "./playerSlice";

export const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    access: accessSlice.reducer,
    searchTrack: searchTrackSlice.reducer,
    player: playerSlice.reducer,
  },
});
