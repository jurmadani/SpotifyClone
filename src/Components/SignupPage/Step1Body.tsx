import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Step1BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step1Body({ setStepNumber }: Step1BodyType) {
  return (
    <div className="signupBody">
      <h1 className="headerText">Sign up to start listening</h1>
      <TextField
        label="Email adress or username"
        className="emailInput"
        margin="normal"
      />
      <a className="nextAnchor" onClick={() => setStepNumber(2)}>
        Next
      </a>
      {/* Divider line */}
      <div className="seperationLine" />
      {/* Already have an account anchor */}
      <div className="goBackDiv">
        <text>Already have an account?</text>
        <Link to="/" className="text">
          <a>Login here.</a>
        </Link>
      </div>
    </div>
  );
}
