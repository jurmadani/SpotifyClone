import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signupSliceType } from "../../types";
import { signupSlice } from "../../redux/signupSlice";

type Step1BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step1Body({ setStepNumber }: Step1BodyType) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <div className="signupBody">
      <h1 className="headerText">Sign up to start listening</h1>
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        label="Email adress"
        error={emailError}
        className="emailInput"
        margin="normal"
      />
      <a
        className="nextAnchor"
        onClick={() => {
          if (email === "") setEmailError(true);
          else {
            setStepNumber(2);
            dispatch(signupSlice.actions.setEmail(email))
          }
        }}
      >
        Next
      </a>
      {/* Divider line */}
      <div className="seperationLine" />
      {/* Already have an account anchor */}
      <div className="goBackDiv">
        <text>Already have an account?</text>
        <Link to="/" className="text">
          <a
            onClick={() => {
              dispatch(signupSlice.actions.resetState(null));
            }}
          >
            Login here.
          </a>
        </Link>
      </div>
    </div>
  );
}
