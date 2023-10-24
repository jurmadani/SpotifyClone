import { createSlice } from "@reduxjs/toolkit";
import { spotifyUserSliceType } from "../types";

const initialState: spotifyUserSliceType = {
  displayName: "",
  imageURL: "",
  playlists: [],
};

export const spotifyUserSlice = createSlice({
  name: "spotifyUser",
  initialState,
  reducers: {
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
  },
});
