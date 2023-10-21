import { createSlice } from "@reduxjs/toolkit";
import { playerSliceType } from "../types";

const initialState: playerSliceType = {
  currentPlayingTrack: "",
  currentPlayingTrackArtists: [],
  currentPlayingTrackImage: "",
  isTrackPlaying: false,
  doesTrackHavePreview: null,
  currentPlayingTrackURL: "",
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentPlayingTrack: (state, action) => {
      state.currentPlayingTrack = action.payload;
    },
    setCurrentPlayingTrackArtists: (state, action) => {
      state.currentPlayingTrackArtists = action.payload;
    },
    setCurrentPlayingTrackImage: (state, action) => {
      state.currentPlayingTrackImage = action.payload;
    },
    setIsTrackPlaying: (state, action) => {
      state.isTrackPlaying = action.payload;
    },
    setDoesTrackHavePreview: (state, action) => {
      state.doesTrackHavePreview = action.payload;
    },
    setCurrentTrackPlayingURL: (state, action) => {
      state.currentPlayingTrackURL = action.payload;
    },
  },
});
