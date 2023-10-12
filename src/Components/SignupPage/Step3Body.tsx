import React from "react";
import "./Step3Body.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FormControl, MenuItem, TextField } from "@mui/material";

type Step3BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step3Body({ setStepNumber }: Step3BodyType) {
  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  return (
    <div className="step3Body">
      <div className="stepInfoBody">
        {/* Go back icon */}
        <ArrowBackIosIcon
          onClick={() => setStepNumber(2)}
          className="backArrow"
        />
        {/* Step number */}
        <div className="stepInfoBody2">
          <text style={{ color: "gray" }}>Step 2 of 3</text>
          <text style={{ marginTop: 3 }}> Tell us about yourself</text>
        </div>
      </div>
      <div className="centeredFormControl">
        {/* name field */}
        <TextField
          helperText="This name will appear on your profile"
          id="demo-helper-text-misaligned"
          label="Name"
          className="nameTextField"
        />
        <text>Date of birth</text>
        <div className="dateOfBirthForm">
          {/* month selector */}
          <TextField
            className="monthSelector"
            id="outlined-select-month"
            select
            defaultValue="Month"
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          {/* day field */} <TextField label="Day" className="dayTextField" />
          {/* year field */}{" "}
          <TextField label="Year" className="yearTextField" />
        </div>
        <a className="nextAnchor" onClick={() => setStepNumber(4)}>
          Next
        </a>
      </div>
    </div>
  );
}
