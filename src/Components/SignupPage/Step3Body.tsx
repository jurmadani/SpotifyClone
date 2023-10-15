import React from "react";
import "./Step3Body.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { signupSlice } from "../../redux/signupSlice";

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
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState(-1);
  const [year, setYear] = React.useState(-1);
  return (
    <div className="step3Body">
      <div className="stepInfoBody">
        {/* Go back icon */}
        <ArrowBackIosIcon
          onClick={() => {
            dispatch(signupSlice.actions.setName(""));
            dispatch(signupSlice.actions.setMonth(""));
            dispatch(signupSlice.actions.setDay(null));
            dispatch(signupSlice.actions.setYear(null));
            setStepNumber(2);
          }}
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
          onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => {
              setMonth(event.target.value);
            }}
            defaultValue="Month"
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          {/* day field */}{" "}
          <TextField
            label="Day"
            className="dayTextField"
            onChange={(event) => setDay(parseInt(event.target.value))}
          />
          {/* year field */}{" "}
          <TextField
            label="Year"
            className="yearTextField"
            onChange={(event) => setYear(parseInt(event.target.value))}
          />
        </div>
        <a
          className="nextAnchor"
          onClick={() => {
            dispatch(signupSlice.actions.setName(name));
            dispatch(signupSlice.actions.setMonth(month));
            dispatch(signupSlice.actions.setDay(day));
            dispatch(signupSlice.actions.setYear(year));
            setStepNumber(4);
          }}
        >
          Next
        </a>
      </div>
    </div>
  );
}
