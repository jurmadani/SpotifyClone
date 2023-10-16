import { createSlice } from "@reduxjs/toolkit";
import { userSliceType } from "../types";

const initialState: userSliceType = {
    email: "",
    password: "",
    name: "",
    birthDate: {
        month: "",
        day: null,
        year: null,
    },
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserState: (state,action) => {
            state.email = action.payload
        }
    }
})