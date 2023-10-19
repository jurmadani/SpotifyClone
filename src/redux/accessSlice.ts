import { createSlice } from "@reduxjs/toolkit";
import { accessSliceType } from "../types";

const initialState: accessSliceType = {
  accessToken: "",
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      console.log("Access token state changed to" + action.payload);
    },
  },
});
