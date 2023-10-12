import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import "./Step2Body.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Step2BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step2Body({ setStepNumber }: Step2BodyType) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="step2Body">
      <div className="stepInfoBody">
        {/* Go back icon */}
        <ArrowBackIosIcon
          onClick={() => setStepNumber(1)}
          className="backArrow"
        />
        {/* Step number */}
        <div className="stepInfoBody2">
          <text style={{ color: "gray" }}>Step 1 of 3</text>
          <text style={{ marginTop: 3 }}> Create password</text>
        </div>
      </div>
      {/* Password */}
      <div className="centeredFormControl">
        <FormControl
          sx={{ width: "40%" }}
          variant="outlined"
          className="formControl"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <text
            style={{
              textAlign: "left",
              marginTop: 5,
              color: "grey",
              fontWeight: "600",
              fontSize: 13,
            }}
          >
            The password must contain at least 8 characters. We recommend
            including at least 1 number and 1 special character
          </text>
          <a className="nextAnchor" onClick={() => setStepNumber(3)}>
            Next
          </a>
        </FormControl>
      </div>
    </div>
  );
}
