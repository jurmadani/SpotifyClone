import { createSlice } from "@reduxjs/toolkit";
import { signupSliceType } from "../types";

const initialState: signupSliceType = {
    email: "",
    password: "",
    name: "",
    birthDate: {
        month: "",
        day: null,
        year: null,
    },
};

export const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
            console.log("email property of the state was updated with " + action.payload)
        },
        setPassword: (state, action) => {
            state.password = action.payload;
            console.log("password property of the state was updated with " + action.payload)
        },
        setName: (state, action) => {
            state.name = action.payload;
            console.log("name property of the state was updated with " + action.payload)
        },
        setMonth: (state, action) => {
            state.birthDate.month = action.payload
            console.log("birthday.month property of the state was updated with " + action.payload)
        },
        setDay: (state, action) => {
            state.birthDate.day = action.payload
            console.log("birthday.day property of the state was updated with " + action.payload)
        },
        setYear: (state, action) => {
            state.birthDate.year = action.payload
            console.log("birthday.year property of the state was updated with " + action.payload)
        },
        resetState: (state, action) => {
            state.email = "";
            state.name = "";
            state.password = "";
            state.birthDate = {
                day: null,
                month: "",
                year: null

            }
            console.log("signup state reset with success")
        }

    }
})
