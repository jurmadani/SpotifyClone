import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "./signupSlice";
import { accessSlice } from "./accessSlice";
import { searchTrackSlice } from "./searchTrackSlice";
import { playerSlice } from "./playerSlice";
import { spotifyUserSlice } from "./spotifyUserSlice";

export const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    access: accessSlice.reducer,
    searchTrack: searchTrackSlice.reducer,
    player: playerSlice.reducer,
    spotifyUser: spotifyUserSlice.reducer
  },
});
