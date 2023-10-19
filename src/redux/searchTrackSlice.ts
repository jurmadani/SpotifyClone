import { createSlice } from "@reduxjs/toolkit";
import { searchSliceType } from "../types";

const initialState: searchSliceType = {
    tracksArray: [],
}

export const searchTrackSlice = createSlice({
    name: "searchTrack",
    initialState,
    reducers: {
        setTracksArray: (state, action) => {
            state.tracksArray = action.payload;
        }
    }
})