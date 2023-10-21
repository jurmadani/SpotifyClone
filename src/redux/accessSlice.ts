import { createSlice } from "@reduxjs/toolkit";
import { accessSliceType } from "../types";

const initialState: accessSliceType = {
  accessToken: "",
  accessTokenForUserInformation: "",
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      console.log("Access token state changed to" + action.payload);
    },
    setAccessTokenForUserInformation: (state, action) => {
      state.accessTokenForUserInformation = action.payload;
      console.log(
        "Access token from Spotify Web API for user information changed to" +
          action.payload
      );
    },
  },
});
