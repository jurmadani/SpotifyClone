import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="signupBody">
      <h1 className="headerText">Sign up to start listening</h1>
      <TextField
        label="Email adress or username"
        className="emailInput"
        margin="normal"
      />
      <a className="nextAnchor">Next</a>
      {/* Divider line */}
      <div className="seperationLine" />
      {/* Already have an account anchor */}
      <div className="goBackDiv">
        <text>Already have an account?</text>
        <Link to="/" className="text">
          <a> Login here.</a>
        </Link>
      </div>
    </div>
  );
}
